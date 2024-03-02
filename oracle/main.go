package main

import (
	"context"
	"encoding/hex"
	"fmt"
	"log"

	"mycelia/x/mycelia/types"

	"github.com/bytemare/frost"
	"github.com/bytemare/frost/dkg"
	"github.com/cosmos/cosmos-sdk/types/query"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/rpc"

	group "github.com/bytemare/crypto"
	"github.com/ignite/cli/v28/ignite/pkg/cosmosaccount"
	"github.com/ignite/cli/v28/ignite/pkg/cosmosclient"
)

var (
	participantsGeneratedInDKG []*frost.Participant

	groupPublicKeyGeneratedInDKG *group.Element
)

var addressPrefix = "cosmos"

func main() {
	rpcClient, err := rpc.DialContext(context.Background(), "https://ethereum.publicnode.com")
	if err != nil {
		log.Fatalf("Failed to dial rpc: %v", err)
	}
	defer rpcClient.Close()

	to := "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
	data := "0x70a08231000000000000000000000000a75b7833c78eba62f1c5389f811ef3a7364d44de"
	// Prepare the call parameters, similar to how you prepared them for CallContract
	callArgs := map[string]interface{}{
		"to":   to,
		"data": data,
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

	ctx := context.Background()
	// Create a Cosmos client instance
	client, err := cosmosclient.New(ctx, cosmosclient.WithAddressPrefix(addressPrefix), cosmosclient.WithKeyringDir("../mycelia/private/.node-1"), cosmosclient.WithHome("../mycelia/private/.node-1"), cosmosclient.WithFees("500stake"))
	if err != nil {
		log.Fatal("client setup", err)
	}

	bobClient, err := cosmosclient.New(ctx, cosmosclient.WithAddressPrefix(addressPrefix), cosmosclient.WithKeyringDir("../mycelia/private/.node-2"), cosmosclient.WithHome("../mycelia/private/.node-2"), cosmosclient.WithFees("500stake"))
	if err != nil {
		log.Fatal("client setup", err)
	}

	// Account `alice` was initialized during `ignite chain serve`
	accountName := "alice"
	bobAccountName := "bob"

	// Get account from the keyring
	account, err := client.Account(accountName)
	if err != nil {
		log.Fatal(err)
	}

	bobAccount, err := bobClient.Account(bobAccountName)
	if err != nil {
		log.Fatal(err)
	}

	addr, err := account.Address(addressPrefix)
	if err != nil {
		log.Fatal(err)
	}

	bobAddr, err := bobAccount.Address(addressPrefix)
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

	maximumAmountOfParticipants := 2
	// numberOfParticipants := 2
	threshold := 2
	configuration := frost.Secp256k1.Configuration()
	// message := crypto.Keccak256([]byte("example"))

	dkgSim(maximumAmountOfParticipants, threshold, configuration)
	aliceCommitBytes := createCommit(1)
	bobCommitBytes := createCommit(2)

	postDataRequest(client, ctx, types.PayLoad{ChainId: 1, ContractAddress: to, FunctionSignture: data, Output: common.Hex2Bytes(result)}, account)

	postCommit(client, ctx, addr, aliceCommitBytes, account)
	postCommit(bobClient, ctx, bobAddr, bobCommitBytes, bobAccount)

	myceliaQueryClient := types.NewQueryClient(client.Context())
	commitResult, err := myceliaQueryClient.Commits(context.Background(), &types.QueryCommits{})
	if err != nil {
		log.Fatalf("Failed to query account balances: %v", err)
	}
	commits, err := frost.DecodeCommitmentList(frost.Secp256k1, commitResult.Commits)
	if err != nil {
		panic(err)
	}
	commits.Sort()

	aliceShare, err := sign(1, "mycelia test", commits)
	bobShare, err := sign(2, "mycelia test", commits)

	postSignature(client, ctx, addr, aliceShare, account)
	postSignature(bobClient, ctx, bobAddr, bobShare, bobAccount)

	sigResult, err := myceliaQueryClient.SignatureShares(context.Background(), &types.QuerySignatureSharesRequest{})
	if err != nil {
		log.Fatalf("Failed to query signature shares: %v", err)
	}
	var sigShares []*frost.SignatureShare
	for i := range sigResult.SignatureShares {
		sigShare, err := configuration.DecodeSignatureShare(sigResult.SignatureShares[i])
		if err != nil {
			panic(err)
		}
		sigShares = append(sigShares, sigShare)
	}
	coordinator := configuration.Participant(nil, nil)

	_ = coordinator.ComputeChallenge(commits, []byte("mycelia test"))
	signature := coordinator.Aggregate(commits, []byte("mycelia test"), sigShares[:])
	if frost.Verify(configuration.Ciphersuite, []byte("mycelia test"), signature, groupPublicKeyGeneratedInDKG) {
		fmt.Println("Sigature verified")
	} else {
		fmt.Println("Sigature verification failed")
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

func dkgSim(maximumAmountOfParticipants, threshold int, configuration *frost.Configuration) {
	// Step 1: Initialise your participant. Each participant must be given an identifier that MUST be unique among
	// all participants. For this example, this participant will have id = 1.
	participantIdentifiers := []*group.Scalar{}
	dkgParticipants := []*dkg.Participant{}
	for i := 0; i < maximumAmountOfParticipants; i++ {
		participantIdentifier := configuration.IDFromInt(i + 1)
		dkgParticipant := dkg.NewParticipant(
			configuration.Ciphersuite,
			participantIdentifier,
			maximumAmountOfParticipants,
			threshold,
		)

		participantIdentifiers = append(participantIdentifiers, participantIdentifier)
		dkgParticipants = append(dkgParticipants, dkgParticipant)
	}

	// Step 2: Call Init() on each participant. This will return data that must be broadcast to all other participants
	// over a secure channel.
	// Step 3: First, collect all round1Data from all other participants. Then call Continue() on each participant
	// providing them with the compiled data.

	accumulatedRound1Data := make([]*dkg.Round1Data, 0, maximumAmountOfParticipants)

	for i := 0; i < maximumAmountOfParticipants; i++ {
		round1Data := dkgParticipants[i].Init()
		if round1Data.SenderIdentifier.Equal(participantIdentifiers[i]) != 1 {
			panic("this is just a test, and it failed")
		}
		accumulatedRound1Data = append(accumulatedRound1Data, round1Data)
	}

	// This will return a dedicated package for each other participant that must be sent to them over a secure channel.
	// The intended receiver is specified in the returned data.
	// We ignore the error for the demo, but execution MUST be aborted upon errors.
	// Step 3: First, collect all round2Data from all other participants. Then call Finalize() on each participant
	// providing the same input as for Continue() and the collected data from the second round2.
	accumulatedRound2Data := make(map[string][]*dkg.Round2Data)
	for i := 0; i < maximumAmountOfParticipants; i++ {
		round2Data, err := dkgParticipants[i].Continue(accumulatedRound1Data)
		if err != nil {
			panic(err)
		} else if len(round2Data) != len(accumulatedRound1Data)-1 {
			panic("this is just a test, and it failed")
		}
		for i := range round2Data {
			receiverString := hex.EncodeToString(round2Data[i].ReceiverIdentifier.Encode())
			accumulatedRound2Data[receiverString] = append(accumulatedRound2Data[receiverString], round2Data[i])
		}
	}

	for i := 0; i < maximumAmountOfParticipants; i++ {
		// This will, for each participant, return their secret key (which is a share of the global secret signing key),
		// the corresponding verification key, and the global public key.
		// We ignore the error for the demo, but execution MUST be aborted upon errors.
		participantIdString := hex.EncodeToString(participantIdentifiers[i].Encode())
		var participantsSecretKey *group.Scalar
		var err error
		participantsSecretKey, _, groupPublicKeyGeneratedInDKG, err = dkgParticipants[i].Finalize(
			accumulatedRound1Data,
			accumulatedRound2Data[participantIdString],
		)
		if err != nil {
			fmt.Println("ERROR HERE")
			panic(err)
		}

		// It is important to set the group's public key.
		configuration.GroupPublicKey = groupPublicKeyGeneratedInDKG

		// Now you can build a Signing Participant for the FROST protocol with this ID and key.
		participantsGeneratedInDKG = append(participantsGeneratedInDKG, configuration.Participant(participantIdentifiers[i], participantsSecretKey))

		fmt.Printf("Signing keys for participant set up. ID: %s\n", hex.EncodeToString(participantIdentifiers[i].Encode()))
	}
}

func createCommit(id int) []byte {
	participant := participantsGeneratedInDKG[id-1]
	commitment := participant.Commit()
	if commitment.Identifier.Equal(participant.KeyShare.Identifier) != 1 {
		panic("failed to create a commit")
	}
	fmt.Println("Before", commitment)
	return commitment.Encode()
}

func postDataRequest(client cosmosclient.Client, ctx context.Context, payload types.PayLoad, account cosmosaccount.Account) {
	addr, err := account.Address(addressPrefix)

	if err != nil {
		log.Fatal(err)
	}

	msg := &types.MsgPostDataRequests{
		User:         addr,
		DataRequests: []*types.DataRequest{{Id: 1, Payload: &payload}},
	}

	txResp, err := client.BroadcastTx(ctx, account, msg)
	if err != nil {
		log.Fatal(err)
	}

	// Print response from broadcasting a transaction
	fmt.Print("MsgCommit:\n\n")
	fmt.Println(txResp)
}

func postCommit(client cosmosclient.Client, ctx context.Context, participant string, commitment []byte, account cosmosaccount.Account) {
	msg := &types.MsgPostCommit{
		DataReqId:   1,
		Participant: participant,
		Commitment:  commitment,
	}

	txResp, err := client.BroadcastTx(ctx, account, msg)
	if err != nil {
		log.Fatal(err)
	}

	// Print response from broadcasting a transaction
	fmt.Print("MsgCommit:\n\n")
	fmt.Println(txResp)
}

func sign(id int, message string, commits frost.CommitmentList) (*frost.SignatureShare, error) {
	participant := participantsGeneratedInDKG[id-1]
	signatureShare, err := participant.Sign([]byte(message), commits)
	if err != nil {
		return &frost.SignatureShare{}, err
	}
	return signatureShare, nil
}

func postSignature(client cosmosclient.Client, ctx context.Context, participant string, signatureShare *frost.SignatureShare, account cosmosaccount.Account) {
	msg := &types.MsgPostSignatureShare{
		DataReqId:      1,
		Participant:    participant,
		SignatureShare: signatureShare.Encode(),
	}
	txResp, err := client.BroadcastTx(ctx, account, msg)
	if err != nil {
		log.Fatal(err)
	}

	// Print response from broadcasting a transaction
	fmt.Print("MsgPostSignatureShare:\n\n")
	fmt.Println(txResp)
}
