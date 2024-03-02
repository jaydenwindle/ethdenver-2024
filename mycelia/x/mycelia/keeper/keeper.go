package keeper

import (
	"context"
	"encoding/json"
	"fmt"

	"cosmossdk.io/core/store"
	"cosmossdk.io/log"
	storetypes "cosmossdk.io/store/types"
	"github.com/bytemare/frost"
	"github.com/bytemare/frost/dkg"
	"github.com/cosmos/cosmos-sdk/codec"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/jaydenwindle/ethdenver-2024/mycelia/x/mycelia/types"
)

type (
	Keeper struct {
		cdc          codec.BinaryCodec
		storeService store.KVStoreService
		logger       log.Logger

		// the address capable of executing a MsgUpdateParams message. Typically, this
		// should be the x/gov module account.
		authority string
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeService store.KVStoreService,
	logger log.Logger,
	authority string,

) Keeper {
	if _, err := sdk.AccAddressFromBech32(authority); err != nil {
		panic(fmt.Sprintf("invalid authority address: %s", authority))
	}

	return Keeper{
		cdc:          cdc,
		storeService: storeService,
		authority:    authority,
		logger:       logger,
	}
}

const (
	Round1DataPrefix         byte = 0x01
	Round2DataPrefix         byte = 0x02
	CommitDataPrefix         byte = 0x03
	SignatureShareDataPrefix byte = 0x04
	DataRequestsPrefix       byte = 0x05

	// temperory hack
	// get validators count and set threshold
	Threshold = 2
)

func (k Keeper) postRound1Data(ctx context.Context, participant sdk.AccAddress, round1Data *dkg.Round1Data) error {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	// bz, err := k.cdc.Marshal(&round1Data)
	// if err != nil {
	// 	return err
	// }
	bz, err := json.Marshal(round1Data)
	if err != nil {
		return err
	}
	store.Set(getRound1DataKey(participant), bz)
	return nil
}

func getRound1DataKey(participant sdk.AccAddress) []byte {
	key := append([]byte{Round1DataPrefix}, []byte(participant)...)
	return key
}

func (k Keeper) postRound2Data(ctx context.Context, round2DataTable map[string]*dkg.Round2Data) error {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	for key, v := range round2DataTable {

		storeKey := getRound2DataKey(key)
		var round2Data []*dkg.Round2Data
		if store.Has(storeKey) {
			var err error
			round2Data, err = k.GetRound2Data(ctx, key)
			if err != nil {
				return fmt.Errorf("failed to get existing round2Data, %v", err)
			}
		}

		round2Data = append(round2Data, v)

		bz, err := json.Marshal(round2Data)
		if err != nil {
			return err
		}
		store.Set(storeKey, bz)
	}
	return nil
}

func getRound2DataKey(identifier string) []byte {
	key := append([]byte{Round1DataPrefix}, []byte(identifier)...)
	return key
}

func (k Keeper) postCommitment(ctx context.Context, participant sdk.AccAddress, commitment *frost.Commitment, dataReqId uint64) error {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	bz := commitment.Encode()
	store.Set(getCommitDataKey(dataReqId, participant), bz)
	dataReq, err := k.GetDataRequestById(ctx, dataReqId)
	if err != nil {
		return fmt.Errorf("failed to get data request by id, %v", err)
	}
	dataReq.CommitCount++
	k.postDataRequests(ctx, []*types.DataRequest{dataReq})
	return nil
}

func getCommitDataKey(id uint64, participant sdk.AccAddress) []byte {
	key := append([]byte{CommitDataPrefix}, i64tob(id)...)
	key = append(key, []byte(participant)...)
	return key
}

func (k Keeper) postSignatureShare(ctx context.Context, participant sdk.AccAddress, signatureShare *frost.SignatureShare, dataReqId uint64) error {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	bz := signatureShare.Encode()
	store.Set(getSignatureShareDataKey(dataReqId, participant), bz)
	dataReq, err := k.GetDataRequestById(ctx, dataReqId)
	if err != nil {
		return fmt.Errorf("failed to get data request by id, %v", err)
	}
	dataReq.SignatureCount++
	k.postDataRequests(ctx, []*types.DataRequest{dataReq})
	return nil
}

func getSignatureShareDataKey(id uint64, participant sdk.AccAddress) []byte {
	key := append([]byte{SignatureShareDataPrefix}, i64tob(id)...)
	key = append(key, []byte(participant)...)
	return key
}

func (k Keeper) postDataRequests(ctx context.Context, dataRequests []*types.DataRequest) error {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	for i := range dataRequests {
		bz, err := k.cdc.Marshal(dataRequests[i])
		if err != nil {
			return fmt.Errorf("falied to marshal data request, %v", err)
		}
		store.Set(getDataRequestKey(dataRequests[i].Id), bz)
	}
	return nil
}

func getDataRequestKey(id uint64) []byte {
	key := append([]byte{DataRequestsPrefix}, i64tob(id)...)
	return key
}

func i64tob(val uint64) []byte {
	r := make([]byte, 8)
	for i := uint64(0); i < 8; i++ {
		r[i] = byte((val >> (i * 8)) & 0xff)
	}
	return r
}

func (k Keeper) UpdateDataRequestStatus(ctx context.Context) error {
	allRequests, err := k.GetDataRequests(ctx)
	if err != nil {
		return fmt.Errorf("failed to get data requests, %v", err)
	}
	var updates []*types.DataRequest
	for i := range allRequests {
		if allRequests[i].CommitCount > Threshold {
			allRequests[i].Status = types.STATUS_ATTESTED
			updates = append(updates, &allRequests[i])
		}
		if (allRequests[i].SignatureCount == allRequests[i].CommitCount) && (allRequests[i].SignatureCount > Threshold) {
			allRequests[i].Status = types.STATUS_SIGNED
			updates = append(updates, &allRequests[i])
		}
	}
	return k.postDataRequests(ctx, updates)
}

func (k Keeper) GetRound1Data(ctx context.Context) ([]*dkg.Round1Data, error) {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	iter := storetypes.KVStorePrefixIterator(store, []byte{Round1DataPrefix})
	defer iter.Close()

	var accumulatedRound1Data []*dkg.Round1Data
	for ; iter.Valid(); iter.Next() {
		var round1Data *dkg.Round1Data
		if err := json.Unmarshal(iter.Value(), &round1Data); err != nil {
			return nil, fmt.Errorf("cannont unmarshal round 1 data, %w", err)
		}

		accumulatedRound1Data = append(accumulatedRound1Data, round1Data)
	}

	return accumulatedRound1Data, nil
}

func (k Keeper) GetRound2Data(ctx context.Context, identifier string) ([]*dkg.Round2Data, error) {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	bz := store.Get(getRound2DataKey(identifier))

	var accumulatedRound2Data []*dkg.Round2Data
	if err := json.Unmarshal(bz, &accumulatedRound2Data); err != nil {
		return nil, fmt.Errorf("cannont unmarshal round 2 data, %v", err)
	}

	return accumulatedRound2Data, nil
}

func (k Keeper) GetCommits(ctx context.Context) (frost.CommitmentList, error) {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	iter := storetypes.KVStorePrefixIterator(store, []byte{CommitDataPrefix})
	defer iter.Close()

	var commits frost.CommitmentList
	for ; iter.Valid(); iter.Next() {
		commit, err := frost.DecodeCommitment(frost.Secp256k1, iter.Value())
		if err != nil {
			return nil, fmt.Errorf("error decoding commitment, %v", err)
		}

		commits = append(commits, commit)
	}

	return commits, nil
}

func (k Keeper) GetSignatureShares(ctx context.Context) ([]*frost.SignatureShare, error) {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	config := frost.Secp256k1.Configuration()

	iter := storetypes.KVStorePrefixIterator(store, []byte{SignatureShareDataPrefix})
	defer iter.Close()

	var signatureShares []*frost.SignatureShare
	for ; iter.Valid(); iter.Next() {
		signatureShare, err := config.DecodeSignatureShare(iter.Value())
		if err != nil {
			return nil, fmt.Errorf("error decoding signature share, %v", err)
		}

		signatureShares = append(signatureShares, signatureShare)
	}

	return signatureShares, nil
}

func (k Keeper) GetDataRequests(ctx context.Context) ([]types.DataRequest, error) {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	iter := storetypes.KVStorePrefixIterator(store, []byte{DataRequestsPrefix})
	defer iter.Close()

	var dataRequests []types.DataRequest
	for ; iter.Valid(); iter.Next() {
		var dataRequest types.DataRequest
		if err := k.cdc.Unmarshal(iter.Value(), &dataRequest); err != nil {
			return nil, fmt.Errorf("failed to unmarshal data request, %v", err)
		}
		dataRequests = append(dataRequests, dataRequest)
	}
	return dataRequests, nil
}

func (k Keeper) GetDataRequestById(ctx context.Context, id uint64) (*types.DataRequest, error) {
	store := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	if !store.Has(getDataRequestKey(id)) {
		return nil, fmt.Errorf("data key not found")
	}
	bz := store.Get(getDataRequestKey(id))

	var dataRequest types.DataRequest
	if err := k.cdc.Unmarshal(bz, &dataRequest); err != nil {
		return nil, fmt.Errorf("failed to unmarshal data request, %v", err)
	}

	return &dataRequest, nil
}

// GetAuthority returns the module's authority.
func (k Keeper) GetAuthority() string {
	return k.authority
}

// Logger returns a module-specific logger.
func (k Keeper) Logger() log.Logger {
	return k.logger.With("module", fmt.Sprintf("x/%s", types.ModuleName))
}
