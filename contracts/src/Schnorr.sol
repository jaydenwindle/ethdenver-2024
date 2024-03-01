// SPDX-License-Identifier: LGPLv3
// Source: https://hackmd.io/@nZ-twauPRISEa6G9zg3XRw/SyjJzSLt9
pragma solidity ^0.8.0;

import "forge-std/console.sol";

library Schnorr {
    // secp256k1 group order
    uint256 public constant Q = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141;

    // parity := public key y-coord parity (27 or 28)
    // px := public key x-coord
    // message := 32-byte message
    // e := schnorr signature challenge
    // s := schnorr signature
    function verify(uint8 parity, bytes32 px, bytes32 message, bytes32 e, bytes32 s) public view returns (bool) {
        // ecrecover inputs are (m, v, r, s);
        bytes32 sp = bytes32(Q - mulmod(uint256(s), uint256(px), Q));
        bytes32 ep = bytes32(Q - mulmod(uint256(e), uint256(px), Q));

        require(sp != 0);
        // the ecrecover precompile implementation checks that the `r` and `s`
        // inputs are non-zero (in this case, `px` and `ep`), thus we don't need to
        // check if they're zero.
        address R = ecrecover(sp, parity, px, ep);
        console.log(R);
        require(R != address(0), "ecrecover failed");
        console.logBytes(abi.encodePacked(R, uint8(parity), px, message));
        return e == keccak256(abi.encodePacked(R, uint8(parity), px, message));
    }
}
