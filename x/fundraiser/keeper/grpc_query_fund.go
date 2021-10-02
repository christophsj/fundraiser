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

func (k Keeper) FundAll(c context.Context, req *types.QueryAllFundRequest) (*types.QueryAllFundResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var funds []*types.Fund
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	fundStore := prefix.NewStore(store, types.KeyPrefix(types.FundKey))

	pageRes, err := query.Paginate(fundStore, req.Pagination, func(key []byte, value []byte) error {
		var fund types.Fund
		if err := k.cdc.UnmarshalBinaryBare(value, &fund); err != nil {
			return err
		}

		funds = append(funds, &fund)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllFundResponse{Fund: funds, Pagination: pageRes}, nil
}

func (k Keeper) Fund(c context.Context, req *types.QueryGetFundRequest) (*types.QueryGetFundResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var fund types.Fund
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasFund(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FundKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetFundIDBytes(req.Id)), &fund)

	return &types.QueryGetFundResponse{Fund: &fund}, nil
}
