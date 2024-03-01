// SPDX-License-Identifier: MIT
//
// Copyright (C) 2023 Daniel Bourdrez. All Rights Reserved.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree or at
// https://spdx.org/licenses/MIT.html

package frost

import (
	// "encoding/hex"
	"encoding/hex"
	"fmt"
	"math/big"

	group "github.com/bytemare/crypto"

	"github.com/bytemare/frost/internal"
	// "github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/crypto"
)

// Signature represent a Schnorr signature.
type Signature struct {
	R *group.Element
	Z *group.Scalar
}

// Encode serializes the signature into a byte string.
func (s *Signature) Encode() []byte {
	return append(s.R.Encode(), s.Z.Encode()...)
}

// Decode attempts to deserialize the encoded input into the signature in the group.
func (s *Signature) Decode(g group.Group, encoded []byte) error {
	eLen := g.ElementLength()
	sLen := g.ScalarLength()

	if len(encoded) != eLen+sLen {
		return internal.ErrInvalidParameters
	}

	if err := s.R.Decode(encoded[:eLen]); err != nil {
		return fmt.Errorf("invalid signature - decoding R: %w", err)
	}

	if err := s.Z.Decode(encoded[eLen:]); err != nil {
		return fmt.Errorf("invalid signature - decoding Z: %w", err)
	}

	return nil
}

// challenge computes the per-message challenge.
func challenge(cs internal.Ciphersuite, r, pk *group.Element, msg []byte) *group.Scalar {
	pubKey, err := crypto.DecompressPubkey(r.Encode())
	if err != nil {
		panic(err)
	}
	fmt.Printf("decompressed key x %s", pubKey.X)
	fmt.Printf("decompressed key y %s", pubKey.Y)
	address := crypto.PubkeyToAddress(*pubKey)
	fmt.Printf("address %s\n", address)
	fmt.Printf("challenge data: %s\n", hex.EncodeToString(internal.Concatenate(address.Bytes(), pk.Encode(), msg)))
	pubKeyEncoded := pk.Encode()
	pubKeyEncoded[0] = pubKeyEncoded[0] + 27 - 2
	hashBytes := crypto.Keccak256(internal.Concatenate(address.Bytes(), pubKeyEncoded, msg))
	scalar := cs.Group.NewScalar()
	scalar.Decode(hashBytes)

	return scalar
}

func computeZ(r, challenge, key *group.Scalar) *group.Scalar {
	return r.Add(challenge.Multiply(key))
}

// Sign returns a Schnorr signature over the message msg with the full secret signing key (as opposed to a key share).
func Sign(cs internal.Ciphersuite, msg []byte, key *group.Scalar) *Signature {
	r := cs.Group.NewScalar().Random()
	R := cs.Group.Base().Multiply(r)
	pk := cs.Group.Base().Multiply(key)
	c := challenge(cs, R, pk, msg)
	z := computeZ(r, c, key)

	return &Signature{
		R: R,
		Z: z,
	}
}

// Verify returns whether the signature of the message msg is valid under the public key pk.
func Verify(cs internal.Ciphersuite, msg []byte, signature *Signature, pk *group.Element) bool {
	c := challenge(cs, signature.R, pk, msg)
	l := cs.Group.Base().Multiply(signature.Z)
	r := signature.R.Add(pk.Copy().Multiply(c))

	if cs.Group == group.Edwards25519Sha512 {
		cofactor := group.Edwards25519Sha512.NewScalar()
		if err := cofactor.SetInt(big.NewInt(8)); err != nil {
			panic(err)
		}

		return l.Multiply(cofactor).Equal(r.Multiply(cofactor)) == 1
	}

	return l.Equal(r) == 1
}
