#!/bin/bash

APP="./build/myceliad"
NAME="mycelia"
CHAIN_ID="mycelia-testnet-1"
MONIKER_1="node-1"
MONIKER_2="node-2"
KEYRING="test"
ACCOUNT_1="alice"
ACCOUNT_2="bob"

cp ./private/.$MONIKER_1/config/genesis.json ./private/.$MONIKER_2/config
cp ./private/.$MONIKER_1/config/app.toml ./private/.$MONIKER_2/config
cp ./private/.$MONIKER_1/config/client.toml ./private/.$MONIKER_2/config
cp ./private/.$MONIKER_1/config/config.toml ./private/.$MONIKER_2/config

sed -i '' 's/26658/26668/' private/.$MONIKER_2/config/config.toml
sed -i '' 's/26656/26666/' private/.$MONIKER_2/config/config.toml
sed -i '' 's/26657/26667/' private/.$MONIKER_2/config/config.toml
sed -i '' 's/26657/26667/' private/.$MONIKER_2/config/client.toml
sed -i '' 's/1317/1327/' private/.$MONIKER_2/config/app.toml
sed -i '' 's/9090/9100/' private/.$MONIKER_2/config/app.toml

NODE1_ID=$($APP comet show-node-id --home ./private/.$MONIKER_1)
sed -i '' 's/seeds = \"\"/seeds = \"'$NODE1_ID'@localhost:26656\"/' private/.$MONIKER_2/config/config.toml
sed -i '' 's/persistent_peers = \"\"/persistent_peers = \"'$NODE1_ID'@localhost:26656\"/' private/.$MONIKER_2/config/config.toml

$APP start --minimum-gas-prices 0.001stake --home ./private/.$MONIKER_2

