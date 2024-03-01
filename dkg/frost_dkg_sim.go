package main

import (
	"encoding/hex"
	"fmt"

	group "github.com/bytemare/crypto"

	"github.com/bytemare/frost"
	"github.com/bytemare/frost/dkg"
	"github.com/ethereum/go-ethereum/crypto"
)

var (
	participantsGeneratedInDKG []*frost.Participant

	groupPublicKeyGeneratedInDKG *group.Element

	commitments     frost.CommitmentList
	commitmentMap   map[string]*frost.Commitment
	signatureShares []*frost.SignatureShare
)

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

func secretSigning(numberOfParticipants int, message []byte) {
	// Step 1: call Commit() on each participant. This will return the participant's single-use commitment.
	// Send this to the coordinator or all other participants over an authenticated
	// channel (confidentiality is not required).
	// A participant keeps an internal state during the protocol run across the two rounds.
	// Step 2: collect the commitments from the other participants and coordinator-chosen the message to sign,
	// and finalize by signing the message.
	for i := 0; i < numberOfParticipants; i++ {
		participant := participantsGeneratedInDKG[i]
		commitment := participant.Commit()
		if commitment.Identifier.Equal(participant.KeyShare.Identifier) != 1 {
			panic("this is just a test and it failed")
		}
		commitments = append(commitments, commitment)
		commitmentMap[hex.EncodeToString(participant.KeyShare.Identifier.Encode())] = commitment
	}
	commitments.Sort()

	for i := 0; i < numberOfParticipants; i++ {
		// This will produce a signature share to be sent back to the coordinator.
		// We ignore the error for the demo, but execution MUST be aborted upon errors.
		participant := participantsGeneratedInDKG[i]
		signatureShare, err := participant.Sign(message, commitments)
		if err != nil {
			panic(err)
		}

		// if !participant.VerifySignatureShare(
		// 	commitmentMap[hex.EncodeToString(participant.KeyShare.Identifier.Encode())],
		// 	participant.GroupPublicKey,
		// 	signatureShare.SignatureShare,
		// 	commitments,
		// 	message,
		// ) {
		// 	fmt.Println("falied: ", i)
		// 	panic("this is a test and it failed")
		// }
		signatureShares = append(signatureShares, signatureShare)

		fmt.Println("Signing successful.")
	}
}

func main() {
	// Each participant must be set to use the same configuration.
	maximumAmountOfParticipants := 4
	numberOfParticipants := 3
	threshold := 2
	configuration := frost.Secp256k1.Configuration()
	message := crypto.Keccak256([]byte("example"))

	commitmentMap = make(map[string]*frost.Commitment)

	dkgSim(maximumAmountOfParticipants, threshold, configuration)
	secretSigning(numberOfParticipants, message)

	// A coordinator CAN be a participant. In this instance, we chose it not to be one.
	coordinator := configuration.Participant(nil, nil)

	challenge := coordinator.ComputeChallenge(commitments, message)

	fmt.Printf("challenge: %s\n", hex.EncodeToString(challenge.Encode()))

	signature := coordinator.Aggregate(commitments, message, signatureShares[:])

	fmt.Printf("group public key: %s\n", hex.EncodeToString(groupPublicKeyGeneratedInDKG.Encode()))
	fmt.Printf("signature: %s\n", hex.EncodeToString(signature.Encode()))
	fmt.Printf("message: %s\n", hex.EncodeToString(message))

	if !frost.Verify(configuration.Ciphersuite, message, signature, groupPublicKeyGeneratedInDKG) {
		fmt.Println("invalid signature")
		// At this point one should try to identify which participant's signature share is invalid and act on it.
		// This verification is done as follows:
		for i, signatureShare := range signatureShares {
			// Verify whether we have the participants commitment
			commitmentI := commitments.Get(signatureShare.Identifier)
			if commitmentI == nil {
				panic("commitment not found")
			}

			// Get the public key corresponding to the signature share's participant
			pki := participantsGeneratedInDKG[i].PublicKey

			if !coordinator.VerifySignatureShare(
				commitmentI,
				pki,
				signatureShare.SignatureShare,
				commitments,
				message,
			) {
				fmt.Printf("participant %v produced an invalid signature share", signatureShare.Identifier.Encode())
			}
		}

		panic("Failed.")
	}

	fmt.Printf("Valid signature for %q.", message)
}
