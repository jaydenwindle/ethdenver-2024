package frostHelper

import (
	"encoding/hex"
	"encoding/json"
	"fmt"
	"os"

	"github.com/bytemare/crypto"
	"github.com/bytemare/frost"
	"github.com/bytemare/frost/dkg"
)

func CreateParticipant(id, maximumAmountOfParticipants, threshold int, configuration *frost.Configuration, filePath string) *dkg.Participant {
	participantIdentifier := configuration.IDFromInt(id)
	dkgParticipant := dkg.NewParticipant(
		configuration.Ciphersuite,
		participantIdentifier,
		maximumAmountOfParticipants,
		threshold,
	)

	return dkgParticipant
}

func Round1Data(participant *dkg.Participant) (*dkg.Round1Data, error) {
	round1Data := participant.Init()
	if round1Data.SenderIdentifier.Equal(participant.Identifier) != 1 {
		return nil, fmt.Errorf("identifier mismatch in round 1 data")
	}
	return round1Data, nil
}

func EncodeRound1Data(round1Data *dkg.Round1Data) ([]byte, error) {
	data, err := json.Marshal(round1Data)
	if err != nil {
		return nil, fmt.Errorf("failed to encode round 1 data: %v", err)
	}
	return data, nil
}

// post round 1 data
// get accumulated round 1 data

func DecodeAccumulatedRound1Data(data []byte) ([]*dkg.Round1Data, error) {
	var accumlatedRound1Data []*dkg.Round1Data
	if err := json.Unmarshal(data, &accumlatedRound1Data); err != nil {
		return nil, fmt.Errorf("failed to decode accumulated round 1 data: %v", err)
	}
	return accumlatedRound1Data, nil
}

func Round2Data(participant *dkg.Participant, accumulatedRound1Data []*dkg.Round1Data) (map[string]*dkg.Round2Data, error) {
	round2Data, err := participant.Continue(accumulatedRound1Data)
	if err != nil {
		return nil, fmt.Errorf("continue step failed, %w", err)
	} else if len(round2Data) != len(accumulatedRound1Data)-1 {
		return nil, fmt.Errorf("incorrect round 2 data")
	}

	round2DataTable := make(map[string]*dkg.Round2Data)
	for i := range round2Data {
		receiverString := hex.EncodeToString(round2Data[i].ReceiverIdentifier.Encode())
		round2DataTable[receiverString] = round2Data[i]
	}

	return round2DataTable, nil
}

// post round 2 data
// get accumulated round 2 data

func Finalize(participant *dkg.Participant, accumulatedRound1Data []*dkg.Round1Data, accumulatedRound2Data []*dkg.Round2Data) (*crypto.Scalar, *crypto.Element, *crypto.Element, error) {
	if len(accumulatedRound2Data) != len(accumulatedRound1Data)-1 {
		return nil, nil, nil, fmt.Errorf("incorrect round 2 data")
	}
	participantSecretKey, verificationShare, groupPubKey, err := participant.Finalize(accumulatedRound1Data, accumulatedRound2Data)
	if err != nil {
		return nil, nil, nil, fmt.Errorf("failed at finalize")
	}
	fmt.Println("GroupPubKey is ", groupPubKey)
	return participantSecretKey, verificationShare, groupPubKey, nil
}

func EncodeRound2DataValues(round2Data map[string]*dkg.Round2Data) (map[string][]byte, error) {
	round2DataTable := make(map[string][]byte)
	for k, v := range round2Data {
		bz, err := json.Marshal(v)
		if err != nil {
			return nil, fmt.Errorf("failed to encode round2data value,%v", err)
		}
		round2DataTable[k] = bz
	}
	return round2DataTable, nil
}

func EncodeRound2Data(round2Data map[string]*dkg.Round2Data) ([]byte, error) {
	bz, err := json.Marshal(round2Data)
	if err != nil {
		return nil, fmt.Errorf("failed to encode round 2 data, %v", err)
	}
	return bz, err
}

func SaveParticipant(participant *dkg.Participant, filePath string) error {
	// Open a new file for writing only
	file, err := os.Create(filePath)
	if err != nil {
		return fmt.Errorf("cannot create file, %w", err)
	}
	defer file.Close()

	// Create a new encoder and send the object
	encoder := json.NewEncoder(file)
	if err := encoder.Encode(participant); err != nil {
		return fmt.Errorf("cannot encode to JSON, %w", err)
	}

	return nil
}

func GetParticipant(filePath string) (*dkg.Participant, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return nil, fmt.Errorf("cannot open file, %w", err)
	}
	defer file.Close()

	// Decode the JSON data to the struct
	var participant *dkg.Participant
	decoder := json.NewDecoder(file)
	if err := decoder.Decode(participant); err != nil {
		return nil, fmt.Errorf("cannot decode JSON, %w", err)
	}

	return participant, nil
}
