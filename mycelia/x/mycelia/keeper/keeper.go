package keeper

import (
	"context"
	"encoding/json"
	"fmt"

	"cosmossdk.io/core/store"
	"cosmossdk.io/log"
	storetypes "cosmossdk.io/store/types"
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
	Round1DataPrefix byte = 0x01
	Round2DataPrefix byte = 0x02
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

// GetAuthority returns the module's authority.
func (k Keeper) GetAuthority() string {
	return k.authority
}

// Logger returns a module-specific logger.
func (k Keeper) Logger() log.Logger {
	return k.logger.With("module", fmt.Sprintf("x/%s", types.ModuleName))
}
