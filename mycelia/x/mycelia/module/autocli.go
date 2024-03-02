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
					Use:       "round-2-data [identifier]",
					Short:     "Get accumulated round-2 data for the participant",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{
						{ProtoField: "identifier"},
					},
				},
				{
					RpcMethod: "Commits",
					Use:       "commits",
					Short:     "Get commits from all the participants",
				},
				{
					RpcMethod: "DataRequests",
					Use:       "data-requests [status]",
					Short:     "Get data requests by the status",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{
						{ProtoField: "status"},
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
					Use:       "post-round-2 [participant] [round_2_data]",
					Short:     "post round 2 data from the participant",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{
						{ProtoField: "participant"}, {ProtoField: "round_2_data"},
					},
				},
				{
					RpcMethod: "PostCommit",
					Use:       "post-commit [participant] [commitment] [data_req_id]",
					Short:     "post commit for signing from the participant",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{
						{ProtoField: "participant"}, {ProtoField: "commitment"}, {ProtoField: "data_req_id"},
					},
				},
				{
					RpcMethod: "PostSignatureShare",
					Use:       "post-signature-share [participant] [signature_share] [data_req_id]",
					Short:     "post signature share from the participant",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{
						{ProtoField: "participant"}, {ProtoField: "signature_share"}, {ProtoField: "data_req_id"},
					},
				},
				{
					RpcMethod: "PostDataRequests",
					Use:       "post-data-requests [data_requests]",
					Short:     "post data requests from the user",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{
						{ProtoField: "data_requests"},
					},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
