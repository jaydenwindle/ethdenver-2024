package keeper

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/bytemare/frost"
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

func (s msgServer) PostCommit(ctx context.Context, msg *types.MsgPostCommit) (*types.MsgPostCommitResponse, error) {
	participant, err := sdk.AccAddressFromBech32(msg.Participant)
	if err != nil {
		return nil, fmt.Errorf("invalid participant address, %w", err)
	}

	commitment, err := frost.DecodeCommitment(frost.Secp256k1, msg.Commitment)
	if err != nil {
		return nil, fmt.Errorf("error decoding commitment, %v", err)
	}

	if err := s.Keeper.postCommitment(ctx, participant, commitment, msg.DataReqId); err != nil {
		return nil, fmt.Errorf("falied to post commit, %v", err)
	}

	return &types.MsgPostCommitResponse{}, nil
}

func (s msgServer) PostSignatureShare(ctx context.Context, msg *types.MsgPostSignatureShare) (*types.MsgPostSignatureShareResponse, error) {
	participant, err := sdk.AccAddressFromBech32(msg.Participant)
	if err != nil {
		return nil, fmt.Errorf("invalid participant address, %w", err)
	}

	config := frost.Secp256k1.Configuration()
	signatureShare, err := config.DecodeSignatureShare(msg.SignatureShare)
	if err != nil {
		return nil, fmt.Errorf("error decoding signature share, %v", err)
	}

	if err := s.Keeper.postSignatureShare(ctx, participant, signatureShare, msg.DataReqId); err != nil {
		return nil, fmt.Errorf("falied to post signature share, %v", err)
	}

	return &types.MsgPostSignatureShareResponse{}, nil
}

func (s msgServer) PostDataRequests(ctx context.Context, msg *types.MsgPostDataRequests) (*types.MsgPostDataRequestsResponse, error) {
	// data req validation
	for i := range msg.DataRequests {
		if msg.DataRequests[i].Status != 0 {
			return nil, fmt.Errorf("invalid status for %v", msg.DataRequests[i])
		}
	}
	if err := s.Keeper.postDataRequests(ctx, msg.DataRequests); err != nil {
		return nil, fmt.Errorf("failed to post data requests, %v", err)
	}
	return &types.MsgPostDataRequestsResponse{}, nil
}
