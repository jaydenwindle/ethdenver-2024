package main

import (
	"flag"
	"fmt"
	"time"

	"github.com/bytemare/frost"
	"github.com/jaydenwindle/ethdenver-2024/frost-helper/dkg"
)

func main() {
	command := flag.String("dkg", "", "Command to execute")
	flag.Parse()

	if *command == "" {
		fmt.Println("Please provide a command.")
		flag.Usage()
		return
	}

	switch *command {
	case "round1":
		fmt.Println("Creating a new participant")
		participant := dkg.CreateParticipant(int(1), int(2), int(2), frost.Secp256k1.Configuration())
		_, err := dkg.Round1Data(participant)
		if err != nil {
			panic(err)
		}

	case "get-participant":
		fmt.Println("Getting participant from file")
		// participant := dkg.CreateParticipant(int(1), int(2), int(2), frost.Secp256k1.Configuration())
		participant, err := dkg.GetParticipant("./participant.txt")
		if err != nil {
			panic(err)
		}
		fmt.Println(participant)
	case "time":
		fmt.Println("Current time:", time.Now().Format("15:04:05"))
	default:
		fmt.Println("Unknown command:", command)
	}
}
