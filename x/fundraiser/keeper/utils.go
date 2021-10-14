package keeper

import (
	"time"

	"github.com/christophsj/fundraiser/x/fundraiser/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	bank "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	"github.com/tendermint/tendermint/crypto"
)

func getTokensFromString(s string) (uint64, error) {
	coins, tokenParseErr := sdk.ParseCoinsNormalized(s)
	if tokenParseErr != nil {
		return 0, tokenParseErr
	}
	return coins.AmountOf("token").Uint64(), nil
}

func parseDate(s string) (time.Time, error) {
	return time.Parse("2006-01-02", s)
}

func returnFundFromModuleAcc(bankKeeper bank.Keeper, ctx sdk.Context, creator string, amount string) {
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	creatorAddr, err := sdk.AccAddressFromBech32(creator)
	if err != nil {
		panic(err)
	}
	returnAmount, err := sdk.ParseCoinsNormalized(amount)
	if err != nil {
		panic(err)
	}

	sdkError := bankKeeper.SendCoins(ctx, moduleAcct, creatorAddr, returnAmount)
	if sdkError != nil {
		ctx.Logger().Error("Could not return funds!.")
		panic(sdkError)
	}
}
