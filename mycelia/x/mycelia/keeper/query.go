package keeper

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/jaydenwindle/ethdenver-2024/mycelia/x/mycelia/types"
)

var _ types.QueryServer = Keeper{}

func (k Keeper) Round1Data(ctx context.Context, req *types.QueryRound1Data) (*types.QueryRound1DataResponse, error) {
	accumulatedRound1Data, err := k.GetRound1Data(ctx)
	if err != nil {
		return nil, err
	}

	bz, err := json.Marshal(accumulatedRound1Data)
	if err != nil {
		return nil, fmt.Errorf("cannont marshal accumlated round 1 data, %w", err)
	}

	return &types.QueryRound1DataResponse{
		AccumlatedRound_1Data: bz,
	}, nil
}

func (k Keeper) Round2Data(ctx context.Context, req *types.QueryRound2Data) (*types.QueryRound2DataResponse, error) {
	accumulatedRound2Data, err := k.GetRound2Data(ctx, req.Identifier)
	if err != nil {
		return nil, err
	}

	bz, err := json.Marshal(accumulatedRound2Data)
	if err != nil {
		return nil, fmt.Errorf("cannont marshal accumlated round 1 data, %w", err)
	}

	return &types.QueryRound2DataResponse{
		AccumlatedRound_2Data: bz,
	}, nil
}

func (k Keeper) Commits(ctx context.Context, req *types.QueryCommits) (*types.QueryCommitsResponse, error) {
	commits, err := k.GetCommits(ctx)
	if err != nil {
		return nil, fmt.Errorf("cannont get commits, %v", err)
	}
	bz := commits.Encode()

	return &types.QueryCommitsResponse{
		Commits: bz,
	}, nil
}

func (k Keeper) SignatureShares(ctx context.Context, req *types.QuerySignatureSharesRequest) (*types.QuerySignatureSharesResponse, error) {
	sigShares, err := k.GetSignatureShares(ctx)
	if err != nil {
		return nil, fmt.Errorf("cannont get signature shares, %v", err)
	}
	var signatureSharesEncoded [][]byte
	for i := range sigShares {
		bz := sigShares[i].Encode()
		signatureSharesEncoded = append(signatureSharesEncoded, bz)
	}

	return &types.QuerySignatureSharesResponse{
		SignatureShares: signatureSharesEncoded,
	}, nil
}

func (k Keeper) DataRequests(ctx context.Context, req *types.QueryRequests) (*types.QueryRequestsResponse, error) {
	dataRequests, err := k.GetDataRequests(ctx)
	if err != nil {
		return nil, fmt.Errorf("cannont get data requests")
	}

	var dataRequestsByStatus []*types.DataRequest
	for i := range dataRequests {
		if dataRequests[i].Status == req.Status {
			dataRequestsByStatus = append(dataRequestsByStatus, &dataRequests[i])
		}
	}
	return &types.QueryRequestsResponse{
		DataRequests: dataRequestsByStatus,
	}, nil
}
