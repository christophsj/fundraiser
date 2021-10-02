package keeper

import (
	"context"
	"fmt"
	"strconv"
	"time"

	"github.com/christophsj/fundraiser/x/fundraiser/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) CreateFund(goCtx context.Context, msg *types.MsgCreateFund) (*types.MsgCreateFundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	amount, err := sdk.ParseCoinsNormalized(msg.Amount)
	if err != nil {
		panic(err)
	}
	sdkError := k.bankKeeper.SendCoins(ctx, creator, moduleAcct, amount)
	//sdkError = k.bankKeeper.SendCoins(ctx, moduleAcct, creator, amount)
	if sdkError != nil {
		return nil, sdkError
	}

	id := k.AppendFund(
		ctx,
		msg.Creator,
		msg.Project,
		msg.Amount,
	)

	return &types.MsgCreateFundResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateFund(goCtx context.Context, msg *types.MsgUpdateFund) (*types.MsgUpdateFundResponse, error) {
	return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Cannot update fund!")
	/*
		ctx := sdk.UnwrapSDKContext(goCtx)

		var fund = types.Fund{
			Creator: msg.Creator,
			Id:      msg.Id,
			Project: msg.Project,
			Amount:  msg.Amount,
		}

		// Checks that the element exists
		if !k.HasFund(ctx, msg.Id) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
		}

		// Checks if the the msg sender is the same as the current owner
		if msg.Creator != k.GetFundOwner(ctx, msg.Id) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
		}

		k.SetFund(ctx, fund)

		return &types.MsgUpdateFundResponse{}, nil
	*/
}

func (k msgServer) DeleteFund(goCtx context.Context, msg *types.MsgDeleteFund) (*types.MsgDeleteFundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasFund(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetFundOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var fund = k.GetFund(ctx, msg.Id)
	fundId, _ := strconv.ParseUint(string(fund.Project), 10, 64)

	var fundraiser = k.GetProject(ctx, fundId)
	now := ctx.BlockTime().UTC()
	projectEndTime, timeParseErr := time.Parse("2006-01-02T15:04:05.000Z", fundraiser.End)

	if timeParseErr != nil {
		panic(timeParseErr)
	}

	var logger = ctx.Logger()
	if now.Before(projectEndTime) {
		logger.Info("Tried to withdraw before deadline")
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "cannot withdraw fund before deadline")
	} else {
		logger.Info("Get all Funds to determine whether goal was hit")
		var x = k.GetAllFund(ctx)
		var collected uint64 = 0
		var fId string = fmt.Sprintf("%d", fundraiser.Id)
		for _, element := range x {

			if element.Project == fId {
				collected += getTokensFromString(element.Amount)
			}
		}

		goalTokens := getTokensFromString(fundraiser.Goal)
		logger.Info(fmt.Sprintf("Collected: %d\nGoal: %d", collected, goalTokens))
		// TODO: if goal reached -> withdraw not possible
		if collected >= goalTokens {
			logger.Error("Cannot withdraw from successful fundraiser")
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "cannot withdraw funds from succesful fundraiser")
		}
	}

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	returnAmount, err := sdk.ParseCoinsNormalized(k.GetFund(ctx, msg.Id).Amount)
	if err != nil {
		panic(err)
	}

	// return original fund
	sdkError := k.bankKeeper.SendCoins(ctx, moduleAcct, creator, returnAmount)
	if sdkError != nil {
		panic(sdkError)
	}

	logger.Info("Removing fund.")
	k.RemoveFund(ctx, msg.Id)

	return &types.MsgDeleteFundResponse{}, nil
}
