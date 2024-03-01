package mycelia

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "github.com/jaydenwindle/ethdenver-2024/mycelia/api/mycelia/mycelia"
)

// AutoCLIOptions implements the autocli.HasAutoCLIConfig interface.
func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions {
	return &autocliv1.ModuleOptions{
		Query: &autocliv1.ServiceCommandDescriptor{
			Service: modulev1.Query_ServiceDesc.ServiceName,
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "Params",
					Use:       "params",
					Short:     "Shows the parameters of the module",
				},
				// this line is used by ignite scaffolding # autocli/query
				{
					RpcMethod: "Round1Data",
					Use:       "round-1-data",
					Short:     "Get accumulated round-1 data",
				},
				{
					RpcMethod: "Round2Data",
					Use:       "round-2-data",
					Short:     "Get accumulated round-1 data for the participant",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{
						{ProtoField: "identifier"},
					},
				},
			},
		},
		Tx: &autocliv1.ServiceCommandDescriptor{
			Service:              modulev1.Msg_ServiceDesc.ServiceName,
			EnhanceCustomCommand: true, // only required if you want to use the custom command
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "UpdateParams",
					Skip:      true, // skipped because authority gated
				},
				{
					RpcMethod: "PostRound1Data",
					Use:       "post-round-1",
					Short:     "post round 1 data from the participant",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{
						{ProtoField: "participant"}, {ProtoField: "round_1_data"},
					},
				},
				{
					RpcMethod: "PostRound2Data",
					Use:       "post-round-2",
					Short:     "post round 2 data from the participant",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{
						{ProtoField: "participant"}, {ProtoField: "round_2_data"},
					},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
