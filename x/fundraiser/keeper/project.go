package keeper

import (
	"encoding/binary"
	"github.com/christophsj/fundraiser/x/fundraiser/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetProjectCount get the total number of project
func (k Keeper) GetProjectCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectCountKey))
	byteKey := types.KeyPrefix(types.ProjectCountKey)
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

// SetProjectCount set the total number of project
func (k Keeper) SetProjectCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectCountKey))
	byteKey := types.KeyPrefix(types.ProjectCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendProject appends a project in the store with a new id and update the count
func (k Keeper) AppendProject(
	ctx sdk.Context,
	creator string,
	title string,
	description string,
	start string,
	end string,
	goal string,
) uint64 {
	// Create the project
	count := k.GetProjectCount(ctx)
	var project = types.Project{
		Creator:     creator,
		Id:          count,
		Title:       title,
		Description: description,
		Start:       start,
		End:         end,
		Goal:        goal,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectKey))
	value := k.cdc.MustMarshalBinaryBare(&project)
	store.Set(GetProjectIDBytes(project.Id), value)

	// Update project count
	k.SetProjectCount(ctx, count+1)

	return count
}

// SetProject set a specific project in the store
func (k Keeper) SetProject(ctx sdk.Context, project types.Project) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectKey))
	b := k.cdc.MustMarshalBinaryBare(&project)
	store.Set(GetProjectIDBytes(project.Id), b)
}

// GetProject returns a project from its id
func (k Keeper) GetProject(ctx sdk.Context, id uint64) types.Project {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectKey))
	var project types.Project
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetProjectIDBytes(id)), &project)
	return project
}

// HasProject checks if the project exists in the store
func (k Keeper) HasProject(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectKey))
	return store.Has(GetProjectIDBytes(id))
}

// GetProjectOwner returns the creator of the project
func (k Keeper) GetProjectOwner(ctx sdk.Context, id uint64) string {
	return k.GetProject(ctx, id).Creator
}

// RemoveProject removes a project from the store
func (k Keeper) RemoveProject(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectKey))
	store.Delete(GetProjectIDBytes(id))
}

// GetAllProject returns all project
func (k Keeper) GetAllProject(ctx sdk.Context) (list []types.Project) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProjectKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Project
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetProjectIDBytes returns the byte representation of the ID
func GetProjectIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetProjectIDFromBytes returns ID in uint64 format from a byte array
func GetProjectIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
