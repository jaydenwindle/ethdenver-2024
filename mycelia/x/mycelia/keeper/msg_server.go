package keeper

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/bytemare/frost/dkg"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/jaydenwindle/ethdenver-2024/mycelia/x/mycelia/types"
)

type msgServer struct {
	Keeper
}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}

var _ types.MsgServer = msgServer{}

func (s msgServer) PostRound1Data(ctx context.Context, msg *types.MsgPostRound1Data) (*types.MsgPostRound1DataResponse, error) {
	address, err := sdk.AccAddressFromBech32(msg.Participant)
	if err != nil {
		return nil, fmt.Errorf("invalid participant address, %w", err)
	}

	var round1Data *dkg.Round1Data
	if err := json.Unmarshal(msg.Round_1Data, &round1Data); err != nil {
		return nil, fmt.Errorf("cannot unmarshal round 1 data, %w", err)
	}

	if err := s.Keeper.postRound1Data(ctx, address, round1Data); err != nil {
		return nil, fmt.Errorf("failed to post round 1 data, %w", err)
	}

	return &types.MsgPostRound1DataResponse{}, nil
}

func (s msgServer) PostRound2Data(ctx context.Context, msg *types.MsgPostRound2Data) (*types.MsgPostRound2DataResponse, error) {
	// TODO: how to verify that a validator is posting incorrect round 2 data
	_, err := sdk.AccAddressFromBech32(msg.Participant)
	if err != nil {
		return nil, fmt.Errorf("invalid participant address, %w", err)
	}

	round2DataTable := make(map[string]*dkg.Round2Data)
	for k, v := range msg.Round_2Data {
		var round2Data *dkg.Round2Data
		if err := json.Unmarshal(v, &round2Data); err != nil {
			return nil, fmt.Errorf("cannont unmarshal round 2 data, %v", err)
		}
		round2DataTable[k] = round2Data
	}

	if err := s.Keeper.postRound2Data(ctx, round2DataTable); err != nil {
		return nil, fmt.Errorf("failed to post round 1 data, %w", err)
	}

	return &types.MsgPostRound2DataResponse{}, nil
}

func (s msgServer) PostCommit(context.Context, *types.MsgPostCommit) (*types.MsgPostCommitResponse, error) {
	return nil, nil
}

func (s msgServer) PostSignatureShare(context.Context, *types.MsgPostSignatureShare) (*types.MsgPostSignatureShareResponse, error) {
	return nil, nil
}
