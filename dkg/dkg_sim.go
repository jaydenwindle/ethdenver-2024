package main

import (
	"encoding/hex"
	"fmt"

	group "github.com/bytemare/crypto"

	"github.com/bytemare/frost"
	"github.com/bytemare/frost/dkg"
)

var (
	participantsGeneratedInDKG []*frost.Participant

	groupPublicKeyGeneratedInDKG *group.Element
)

func main() {
	// Each participant must be set to use the same configuration.
	maximumAmountOfParticipants := 9
	threshold := 6
	configuration := frost.Ristretto255.Configuration()

	dkg_sim(maximumAmountOfParticipants, threshold, configuration)
}

func dkg_sim(maximumAmountOfParticipants, threshold int, configuration *frost.Configuration) {
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
		participantsSecretKey, _, groupPublicKeyGeneratedInDKG, err := dkgParticipants[i].Finalize(
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
