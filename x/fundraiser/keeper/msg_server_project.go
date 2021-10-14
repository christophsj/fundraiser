package keeper

import (
	"context"
	"fmt"

	"github.com/christophsj/fundraiser/x/fundraiser/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateProject(goCtx context.Context, msg *types.MsgCreateProject) (*types.MsgCreateProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, err := parseDate(msg.End)
	if err != nil {
		ctx.Logger().Error("Error parsing end date: %s", msg.End)
		panic(ctx)
	}
	_, err = parseDate(msg.Start)
	if err != nil {
		ctx.Logger().Error("Error parsing start date: %s", msg.Start)
		panic(ctx)
	}

	_, err = getTokensFromString(msg.Goal)
	if err != nil {
		ctx.Logger().Error("Error parsing goal tokens: %s", msg.Goal)
		panic(ctx)
	}

	id := k.AppendProject(
		ctx,
		msg.Creator,
		msg.Title,
		msg.Description,
		msg.Start,
		msg.End,
		msg.Goal,
	)

	return &types.MsgCreateProjectResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateProject(goCtx context.Context, msg *types.MsgUpdateProject) (*types.MsgUpdateProjectResponse, error) {
	return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Cannot update project!")
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

func (k msgServer) DeleteProject(goCtx context.Context, msg *types.MsgDeleteProject) (*types.MsgDeleteProjectResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)
	if !k.HasProject(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetProjectOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	// TODO: return funds
	k.RemoveProject(ctx, msg.Id)

	return &types.MsgDeleteProjectResponse{}, nil

}
