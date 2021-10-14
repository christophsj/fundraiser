package keeper

import (
	"context"
	"fmt"
	"strconv"

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

	var logger = ctx.Logger()
	logger.Error("Request delete of fund %d", msg.Id)

	var fund = k.GetFund(ctx, msg.Id)
	fundId, _ := strconv.ParseUint(string(fund.Project), 10, 64)

	var project = k.GetProject(ctx, fundId)
	// project does not exist (anymore)
	if project.Creator != "" {
		now := ctx.BlockTime().UTC()
		projectEndTime, parseDateErr := parseDate(project.End)

		if parseDateErr != nil {
			logger.Error("Error parsing end date: %s", project.End)
			panic(ctx)
		}

		if now.Before(projectEndTime) {
			logger.Info("Tried to withdraw before deadline")
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "cannot withdraw fund before deadline")
		} else {
			// if goal reached -> withdraw not possible
			if k.wasGoalHit(ctx, project) {
				logger.Error("Cannot withdraw from successful fundraiser")
				return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "cannot withdraw funds from succesful fundraiser")
			}
		}
	}

	returnFundFromModuleAcc(k.bankKeeper, ctx, msg.Creator, k.GetFund(ctx, fundId).Amount)

	logger.Info("Removing fund.")
	k.RemoveFund(ctx, msg.Id)

	return &types.MsgDeleteFundResponse{}, nil
}

func (k msgServer) wasGoalHit(ctx sdk.Context, project types.Project) bool {
	var logger = ctx.Logger()
	logger.Info("Get all Funds to determine whether goal was hit")
	var x = k.GetAllFund(ctx)
	var collected uint64 = 0
	var fId string = fmt.Sprintf("%d", project.Id)
	for _, element := range x {

		if element.Project == fId {
			val, err := getTokensFromString(element.Amount)
			if err != nil {
				logger.Error("Error parsing amount!")
				logger.Error(err.Error())
				panic(err)
			}
			collected += val
			logger.Info("Total: %d", collected)
		}
	}

	goalTokens, err := getTokensFromString(project.Goal)

	if err != nil {
		logger.Error("Error parsing goal!")
		logger.Error(err.Error())
		panic(err)
	}

	logger.Info(fmt.Sprintf("Collected: %d\nGoal: %d", collected, goalTokens))
	return collected >= goalTokens
}
