package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func getTokensFromString(s string) uint64 {
	coins, tokenParseErr := sdk.ParseCoinsNormalized(s)
	if tokenParseErr != nil {
		panic(tokenParseErr)
	}
	return coins.AmountOf("token").Uint64()
}
