// SPDX-License-Identifier: LGPLv3
// Source: https://hackmd.io/@nZ-twauPRISEa6G9zg3XRw/SyjJzSLt9
pragma solidity ^0.8.0;

import "forge-std/console.sol";

library Schnorr {
    error EcrecoverFailed();
    error InvalidSigner();
    error InvalidSignature();

    // secp256k1 group order
    uint256 public constant Q = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141;

    // parity := public key y-coord parity (27 or 28)
    // px := public key x-coord
    // message := 32-byte message
    // e := schnorr signature challenge
    // s := schnorr signature
    struct SchnorrSignature {
        uint8 parity;
        bytes32 px;
        bytes32 message;
        bytes32 e;
        bytes32 s;
    }

    function recover(SchnorrSignature calldata signature) public pure returns (address) {
        // ecrecover inputs are (m, v, r, s);
        bytes32 sp = bytes32(Q - mulmod(uint256(signature.s), uint256(signature.px), Q));
        bytes32 ep = bytes32(Q - mulmod(uint256(signature.e), uint256(signature.px), Q));

        if (sp == 0) revert InvalidSignature();

        // the ecrecover precompile implementation checks that the `r` and `s`
        // inputs are non-zero (in this case, `px` and `ep`), thus we don't need to
        // check if they're zero.
        address R = ecrecover(sp, signature.parity, signature.px, ep);

        if (R == address(0)) revert InvalidSignature();

        bytes32 challenge = keccak256(abi.encodePacked(R, uint8(signature.parity), signature.px, signature.message));

        if (signature.e != challenge) revert InvalidSignature();

        return R;
    }
}
