#!/bin/bash

APP=./build/myceliad
ACCOUNT_1="alice"
ACCOUNT_2="bob"
USER_ACCOUNT="darth"
MONIKER_1="node-1"
MONIKER_2="node-2"
KEYRING="test"
CHAIN_ID="mycelia-testnet-1"
ADDRESS_1=$($APP keys show $ACCOUNT_1 -a --home ./private/.$MONIKER_1 --keyring-backend $KEYRING)
ADDRESS_2=$($APP keys show $ACCOUNT_2 -a --home ./private/.$MONIKER_2 --keyring-backend $KEYRING)
DENOM=$(jq -r .app_state.staking.params.bond_denom ./private/.$MONIKER_1/config/genesis.json)

jq --arg addr $ADDRESS_1 '.members[0].address = $addr' ./data/members.json > temp.json && mv temp.json ./data/members.json
jq --arg addr $ADDRESS_2 '.members[1].address = $addr' ./data/members.json > temp.json && mv temp.json ./data/members.json

$APP tx group create-group-with-policy $ACCOUNT_1 ./data/group_metadata.json ./data/group_metadata.json ./data/members.json ./data/grp_policy.json \
    --fees 200$DENOM \
    --home ./private/.$MONIKER_1 \
    --chain-id $CHAIN_ID \
    --keyring-backend $KEYRING \

$APP keys add $USER_ACCOUNT --home ./private/.$MONIKER_1 --keyring-backend $KEYRING
USER_ADDR=$($APP keys show $USER_ACCOUNT -a --home ./private/.$MONIKER_1 --keyring-backend $KEYRING)

sleep 5

$APP tx bank send $ACCOUNT_1 $USER_ADDR 1000$DENOM \
    --home ./private/.$MONIKER_1 \
    --keyring-backend $KEYRING \
    --chain-id $CHAIN_ID \
    --fees 200$DENOM

GROUP_ID=1
GROUP_POLICY_ADDR=$($APP q group group-policies-by-group $GROUP_ID -o json | jq '.group_policies[0].address')
GROUP_POLICY_ADDR=${GROUP_POLICY_ADDR:1:65}
echo $GROUP_POLICY_ADDR
jq --arg addr $GROUP_POLICY_ADDR '.group_policy_address = $addr' ./data/proposal.json > temp.json && mv temp.json ./data/proposal.json
jq --arg addr $GROUP_POLICY_ADDR '.messages[0].from_address = $addr' ./data/proposal.json > temp.json && mv temp.json ./data/proposal.json
jq --arg denom $DENOM '.messages[0].amount[0].denom = $denom' ./data/proposal.json > temp.json && mv temp.json ./data/proposal.json
jq --arg addr $USER_ADDR '.proposers[0] = $addr' ./data/proposal.json > temp.json && mv temp.json ./data/proposal.json

sleep 5

$APP tx group submit-proposal ./data/proposal.json \
    --fees 300$DENOM \
    --home ./private/.$MONIKER_1 \
    --chain-id $CHAIN_ID \
    --keyring-backend $KEYRING