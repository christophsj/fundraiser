package keeper

import (
	"github.com/christophsj/fundraiser/x/fundraiser/types"
)

var _ types.QueryServer = Keeper{}
