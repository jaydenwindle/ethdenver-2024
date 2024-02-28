#!/bin/bash

APP="./build/myceliad"
NAME="mycelia"
CHAIN_ID="mycelia-testnet-1"
MONIKER_1="node-1"
MONIKER_2="node-2"
KEYRING="test"
ACCOUNT_1="alice"
ACCOUNT_2="bob"

rm -rf ./private/
rm -rf ./build/

make build

$APP init $MONIKER_1 --home ./private/.$MONIKER_1 --chain-id $CHAIN_ID
$APP init $MONIKER_2 --home ./private/.$MONIKER_2 --chain-id $CHAIN_ID

$APP keys add $ACCOUNT_1 --home ./private/.$MONIKER_1 --keyring-backend $KEYRING
$APP keys add $ACCOUNT_2 --home ./private/.$MONIKER_2 --keyring-backend $KEYRING

$APP keys list --home ./private/.$MONIKER_1 --keyring-backend $KEYRING
$APP keys list --home ./private/.$MONIKER_2 --keyring-backend $KEYRING

DENOM=$(jq -r .app_state.staking.params.bond_denom ./private/.$MONIKER_1/config/genesis.json) 

ADDRESS_1=$($APP keys show $ACCOUNT_1 -a --home ./private/.$MONIKER_1 --keyring-backend $KEYRING)
echo "ADDRESS_1: $ADDRESS_1"
ADDRESS_2=$($APP keys show $ACCOUNT_2 -a --home ./private/.$MONIKER_2 --keyring-backend $KEYRING)
echo "ADDRESS_2: $ADDRESS_2"

$APP genesis add-genesis-account $ADDRESS_1  1000000000000000$DENOM --home ./private/.$MONIKER_1
$APP genesis add-genesis-account $ADDRESS_2  1000000000000000$DENOM --home ./private/.$MONIKER_1

$APP genesis gentx $ACCOUNT_1  70000000000000$DENOM --home ./private/.$MONIKER_1 --keyring-backend $KEYRING --chain-id $CHAIN_ID

$APP genesis collect-gentxs --home ./private/.$MONIKER_1

$APP genesis validate --home ./private/.$MONIKER_1

$APP start --minimum-gas-prices 0.001stake --home ./private/.$MONIKER_1