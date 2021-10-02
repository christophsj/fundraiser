package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # genesis/types/default
		FundList:    []*Fund{},
		ProjectList: []*Project{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in fund
	fundIdMap := make(map[uint64]bool)

	for _, elem := range gs.FundList {
		if _, ok := fundIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for fund")
		}
		fundIdMap[elem.Id] = true
	}
	// Check for duplicated ID in project
	projectIdMap := make(map[uint64]bool)

	for _, elem := range gs.ProjectList {
		if _, ok := projectIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for project")
		}
		projectIdMap[elem.Id] = true
	}

	return nil
}
