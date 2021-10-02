package keeper

import (
	"context"
	"fmt"

	"github.com/christophsj/fundraiser/x/fundraiser/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateFund(goCtx context.Context, msg *types.MsgCreateFund) (*types.MsgCreateFundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

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
}

func (k msgServer) DeleteFund(goCtx context.Context, msg *types.MsgDeleteFund) (*types.MsgDeleteFundResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasFund(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetFundOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveFund(ctx, msg.Id)

	return &types.MsgDeleteFundResponse{}, nil
}
