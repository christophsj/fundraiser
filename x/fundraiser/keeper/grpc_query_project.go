package keeper

import (
	"context"

	"github.com/christophsj/fundraiser/x/fundraiser/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ProjectAll(c context.Context, req *types.QueryAllProjectRequest) (*types.QueryAllProjectResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var projects []*types.Project
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	projectStore := prefix.NewStore(store, types.KeyPrefix(types.ProjectKey))

	pageRes, err := query.Paginate(projectStore, req.Pagination, func(key []byte, value []byte) error {
		var project types.Project
		if err := k.cdc.UnmarshalBinaryBare(value, &project); err != nil {
			return err
		}

		projects = append(projects, &project)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllProjectResponse{Project: projects, Pagination: pageRes}, nil
}

func (k Keeper) Project(c context.Context, req *types.QueryGetProjectRequest) (*types.QueryGetProjectResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var project types.Project
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasProject(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetProjectIDBytes(req.Id)), &project)

	return &types.QueryGetProjectResponse{Project: &project}, nil
}
