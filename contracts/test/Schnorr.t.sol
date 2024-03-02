// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Schnorr} from "../src/Schnorr.sol";

contract SchnorrTest is Test {
    function testSchnorrVerification() public {
        address expected = 0xaC2C077eA02412bE1fFAd6d7f6AACE0BdF7CDa8d;
        uint8 parity = 27;
        bytes32 px = 0x8cea4cce82d412aa6a7fcda716cedc32097ee2902b5be410c410c1582ba124f8;
        bytes32 message = 0x6fd43e7cffc31bb581d7421c8698e29aa2bd8e7186a394b85299908b4eb9b175;
        bytes32 challenge = 0x8a4a7755627c39d121cd84c925101ad6a88654a0db97f65e7be8f314d4b4c751;
        bytes32 sigS = 0x5104c517019cfedb4087870258c9ee68c404c08ede97d926d11e5839570e98bf;

        address recovered = Schnorr.recover(Schnorr.SchnorrSignature(parity, px, message, challenge, sigS));

        assertEq(recovered, expected);
    }
}
