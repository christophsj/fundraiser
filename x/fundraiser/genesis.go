package fundraiser

import (
	"github.com/christophsj/fundraiser/x/fundraiser/keeper"
	"github.com/christophsj/fundraiser/x/fundraiser/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the fund
	for _, elem := range genState.FundList {
		k.SetFund(ctx, *elem)
	}

	// Set fund count
	k.SetFundCount(ctx, uint64(len(genState.FundList)))

	// Set all the project
	for _, elem := range genState.ProjectList {
		k.SetProject(ctx, *elem)
	}

	// Set project count
	k.SetProjectCount(ctx, uint64(len(genState.ProjectList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all fund
	fundList := k.GetAllFund(ctx)
	for _, elem := range fundList {
		elem := elem
		genesis.FundList = append(genesis.FundList, &elem)
	}

	// Get all project
	projectList := k.GetAllProject(ctx)
	for _, elem := range projectList {
		elem := elem
		genesis.ProjectList = append(genesis.ProjectList, &elem)
	}

	return genesis
}
