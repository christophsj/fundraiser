package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateProject{}

func NewMsgCreateProject(creator string, title string, description string, start string, end string, goal string) *MsgCreateProject {
	return &MsgCreateProject{
		Creator:     creator,
		Title:       title,
		Description: description,
		Start:       start,
		End:         end,
		Goal:        goal,
	}
}

func (msg *MsgCreateProject) Route() string {
	return RouterKey
}

func (msg *MsgCreateProject) Type() string {
	return "CreateProject"
}

func (msg *MsgCreateProject) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateProject) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateProject) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateProject{}

func NewMsgUpdateProject(creator string, id uint64, title string, description string, start string, end string, goal string) *MsgUpdateProject {
	return &MsgUpdateProject{
		Id:          id,
		Creator:     creator,
		Title:       title,
		Description: description,
		Start:       start,
		End:         end,
		Goal:        goal,
	}
}

func (msg *MsgUpdateProject) Route() string {
	return RouterKey
}

func (msg *MsgUpdateProject) Type() string {
	return "UpdateProject"
}

func (msg *MsgUpdateProject) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateProject) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateProject) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateProject{}

func NewMsgDeleteProject(creator string, id uint64) *MsgDeleteProject {
	return &MsgDeleteProject{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteProject) Route() string {
	return RouterKey
}

func (msg *MsgDeleteProject) Type() string {
	return "DeleteProject"
}

func (msg *MsgDeleteProject) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteProject) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteProject) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
