package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/christophsj/fundraiser/x/fundraiser/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateProject() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-project [title] [description] [start] [end] [goal]",
		Short: "Creates a new project",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsTitle := string(args[0])
			argsDescription := string(args[1])
			argsStart := string(args[2])
			argsEnd := string(args[3])
			argsGoal := string(args[4])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateProject(clientCtx.GetFromAddress().String(), string(argsTitle), string(argsDescription), string(argsStart), string(argsEnd), string(argsGoal))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateProject() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-project [id] [title] [description] [start] [end] [goal]",
		Short: "Update a project",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsTitle := string(args[1])
			argsDescription := string(args[2])
			argsStart := string(args[3])
			argsEnd := string(args[4])
			argsGoal := string(args[5])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateProject(clientCtx.GetFromAddress().String(), id, string(argsTitle), string(argsDescription), string(argsStart), string(argsEnd), string(argsGoal))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteProject() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-project [id] [title] [description] [start] [end] [goal]",
		Short: "Delete a project by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteProject(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
