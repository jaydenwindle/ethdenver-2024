#!/bin/bash

APP="./build/myceliad"
NAME="mycelia"
CHAIN_ID="mycelia-testnet-1"
MONIKER="frost-1"
KEYRING="test"
ACCOUNT_1="alice"

rm -rf ./private/.$NAME

$APP init $MONIKER --home ./private/.$NAME --chain-id $CHAIN_ID

$APP keys add $ACCOUNT_1 --home ./private/.$NAME --keyring-backend $KEYRING

$APP keys list --home ./private/.$NAME --keyring-backend $KEYRING

$APP keys show $ACCOUNT_1 --home ./private/.$NAME --keyring-backend $KEYRING

DENOM=$(jq -r .app_state.staking.params.bond_denom ./private/.$NAME/config/genesis.json) 

$APP genesis add-genesis-account $ACCOUNT_1  1000000000000000$DENOM --home ./private/.$NAME --keyring-backend $KEYRING

$APP genesis gentx $ACCOUNT_1  70000000000000$DENOM --home ./private/.$NAME --keyring-backend $KEYRING --chain-id $CHAIN_ID

$APP genesis collect-gentxs --home ./private/.$NAME

$APP genesis validate --home ./private/.$NAME

$APP start --minimum-gas-prices 0.001stake --home ./private/.$NAME