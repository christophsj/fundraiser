package keeper

import (
	"encoding/binary"
	"github.com/christophsj/fundraiser/x/fundraiser/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetFundCount get the total number of fund
func (k Keeper) GetFundCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FundCountKey))
	byteKey := types.KeyPrefix(types.FundCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetFundCount set the total number of fund
func (k Keeper) SetFundCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FundCountKey))
	byteKey := types.KeyPrefix(types.FundCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendFund appends a fund in the store with a new id and update the count
func (k Keeper) AppendFund(
	ctx sdk.Context,
	creator string,
	project string,
	amount string,
) uint64 {
	// Create the fund
	count := k.GetFundCount(ctx)
	var fund = types.Fund{
		Creator: creator,
		Id:      count,
		Project: project,
		Amount:  amount,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FundKey))
	value := k.cdc.MustMarshalBinaryBare(&fund)
	store.Set(GetFundIDBytes(fund.Id), value)

	// Update fund count
	k.SetFundCount(ctx, count+1)

	return count
}

// SetFund set a specific fund in the store
func (k Keeper) SetFund(ctx sdk.Context, fund types.Fund) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FundKey))
	b := k.cdc.MustMarshalBinaryBare(&fund)
	store.Set(GetFundIDBytes(fund.Id), b)
}

// GetFund returns a fund from its id
func (k Keeper) GetFund(ctx sdk.Context, id uint64) types.Fund {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FundKey))
	var fund types.Fund
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetFundIDBytes(id)), &fund)
	return fund
}

// HasFund checks if the fund exists in the store
func (k Keeper) HasFund(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FundKey))
	return store.Has(GetFundIDBytes(id))
}

// GetFundOwner returns the creator of the fund
func (k Keeper) GetFundOwner(ctx sdk.Context, id uint64) string {
	return k.GetFund(ctx, id).Creator
}

// RemoveFund removes a fund from the store
func (k Keeper) RemoveFund(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FundKey))
	store.Delete(GetFundIDBytes(id))
}

// GetAllFund returns all fund
func (k Keeper) GetAllFund(ctx sdk.Context) (list []types.Fund) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FundKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Fund
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetFundIDBytes returns the byte representation of the ID
func GetFundIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetFundIDFromBytes returns ID in uint64 format from a byte array
func GetFundIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
