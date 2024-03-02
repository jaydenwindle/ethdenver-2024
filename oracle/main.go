package main

import (
	"context"
	"fmt"
	"log"

	// "mycelia/x/mycelia/types"

	"github.com/cosmos/cosmos-sdk/types/query"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"

	// "github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/rpc"
	"github.com/ignite/cli/v28/ignite/pkg/cosmosclient"
)

func main() {
	rpcClient, err := rpc.DialContext(context.Background(), "https://ethereum.publicnode.com")
	if err != nil {
		log.Fatalf("Failed to dial rpc: %v", err)
	}
	defer rpcClient.Close()

	// Prepare the call parameters, similar to how you prepared them for CallContract
	callArgs := map[string]interface{}{
		"to":   "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
		"data": "0x70a08231000000000000000000000000a75b7833c78eba62f1c5389f811ef3a7364d44de",
	}

	var result string
	err = rpcClient.CallContext(context.Background(), &result, "eth_call", callArgs, "latest")
	if err != nil {
		// This is where you might get a revert reason
		if err.Error() == "execution reverted" {
			// The revert reason is often included in the error message after "execution reverted"
			// Here, you'd need to decode the revert reason from the error message if it's provided
			fmt.Println("Call reverted:", err.Error())
		} else {
			log.Fatalf("Failed to execute contract call: %v", err)
		}
	} else {
		fmt.Println(result)
	}

	addressPrefix := "cosmos"

	// Create a Cosmos client instance
	client, err := cosmosclient.New(context.Background(), cosmosclient.WithAddressPrefix(addressPrefix), cosmosclient.WithKeyringDir("../mycelia/private/.node-1"))
	if err != nil {
		log.Fatal("client setup", err)
	}

	// Account `alice` was initialized during `ignite chain serve`
	accountName := "alice"

	// Get account from the keyring
	account, err := client.Account(accountName)
	if err != nil {
		log.Fatal(err)
	}

	addr, err := account.Address(addressPrefix)
	if err != nil {
		log.Fatal(err)
	}

	bankQueryClient := banktypes.NewQueryClient(client.Context())
	res, err := bankQueryClient.AllBalances(context.Background(), &banktypes.QueryAllBalancesRequest{
		Address: addr,
		Pagination: &query.PageRequest{
			Limit: 100, // Adjust based on how many results you expect
		},
	})
	if err != nil {
		log.Fatalf("Failed to query account balances: %v", err)
	}

	// Print out the balances
	fmt.Println("Account balances:")
	for _, coin := range res.Balances {
		fmt.Printf("- %s: %s\n", coin.Denom, coin.Amount)
	}

	// client.RPC.Start()
	//
	// query := "tm.event = 'Tx' AND transfer.sender EXISTS"
	// events, err := client.RPC.Subscribe(context.Background(), "data-requests", query)
	// if err != nil {
	// 	log.Fatalf("Failed to subscribe to events: %v", err)
	// }
	//
	// for event := range events {
	// 	fmt.Printf("New event: %v\n", event)
	// 	// Handle the event as needed
	// }
}
