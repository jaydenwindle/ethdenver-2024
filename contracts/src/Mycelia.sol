// SPDX-License-Identifier: LGPLv3
pragma solidity ^0.8.0;

import "forge-std/console.sol";

import {Schnorr} from "./Schnorr.sol";

contract Mycelia {
    error InvalidRequest();
    error InvalidSignature();

    address oracle;

    constructor(address genesisOracle) {
        oracle = genesisOracle;
    }

    function verify(
        uint256 chainId,
        address _contract,
        bytes calldata data,
        bytes calldata response,
        Schnorr.SchnorrSignature calldata signature
    ) public view returns (bytes memory) {
        bytes32 request = keccak256(abi.encode(chainId, _contract, data, response));

        console.logBytes32(request);

        if (request != signature.message) revert InvalidRequest();

        address signer = Schnorr.recover(signature);

        if (signer != oracle) revert InvalidSignature();

        return response;
    }
}
