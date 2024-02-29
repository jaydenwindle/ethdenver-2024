#!/bin/bash

APP="./build/myceliad"
NAME="mycelia"
CHAIN_ID="mycelia-testnet-1"
MONIKER_1="node-1"
MONIKER_2="node-2"
KEYRING="test"
ACCOUNT_1="alice"
ACCOUNT_2="bob"
DENOM=$(jq -r .app_state.staking.params.bond_denom ./private/.$MONIKER_2/config/genesis.json) 

$APP comet show-validator --home ./private/.$MONIKER_2 > pubkey.json
KEY_TYPE=$(jq -r '.["@type"]' pubkey.json)
KEY=$(jq -r '.key' pubkey.json)
rm pubkey.json
jq --arg key_type $KEY_TYPE '.pubkey.["@type"] = $key_type' validator.json > temp.json && mv temp.json validator.json
jq --arg key $KEY '.pubkey.key = $key' validator.json > temp.json && mv temp.json validator.json
jq --arg amt 70000000000000$DENOM '.amount = $amt' validator.json > temp.json && mv temp.json validator.json
jq --arg mon $MONIKER_2 '.moniker = $mon' validator.json > temp.json && mv temp.json validator.json

$APP tx staking create-validator ./validator.json --from $ACCOUNT_2 --fees=200$DENOM --home ./private/.$MONIKER_2 --chain-id $CHAIN_ID --keyring-backend $KEYRING