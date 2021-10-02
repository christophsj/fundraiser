package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateFund{}, "fundraiser/CreateFund", nil)
	cdc.RegisterConcrete(&MsgUpdateFund{}, "fundraiser/UpdateFund", nil)
	cdc.RegisterConcrete(&MsgDeleteFund{}, "fundraiser/DeleteFund", nil)

	cdc.RegisterConcrete(&MsgCreateProject{}, "fundraiser/CreateProject", nil)
	cdc.RegisterConcrete(&MsgUpdateProject{}, "fundraiser/UpdateProject", nil)
	cdc.RegisterConcrete(&MsgDeleteProject{}, "fundraiser/DeleteProject", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateFund{},
		&MsgUpdateFund{},
		&MsgDeleteFund{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateProject{},
		&MsgUpdateProject{},
		&MsgDeleteProject{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)
