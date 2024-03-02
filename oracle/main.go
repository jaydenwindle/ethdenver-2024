package main

import (
	"context"
	"fmt"
	"log"
	// "mycelia/x/mycelia/types"

	"github.com/cosmos/cosmos-sdk/types/query"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"

	"github.com/ignite/cli/v28/ignite/pkg/cosmosclient"
)

func main() {
	ctx := context.Background()
	addressPrefix := "cosmos"

	// Create a Cosmos client instance
	client, err := cosmosclient.New(ctx, cosmosclient.WithAddressPrefix(addressPrefix), cosmosclient.WithKeyringDir("../mycelia/private/.node-1"))
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

	client.RPC.Start()

	query := "tm.event = 'Tx' AND transfer.sender EXISTS"
	events, err := client.RPC.Subscribe(context.Background(), "data-requests", query)
	if err != nil {
		log.Fatalf("Failed to subscribe to events: %v", err)
	}

	for event := range events {
		fmt.Printf("New event: %v\n", event)
		// Handle the event as needed
	}
}
