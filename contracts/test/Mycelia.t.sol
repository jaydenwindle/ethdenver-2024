// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Schnorr} from "../src/Schnorr.sol";
import {Mycelia} from "../src/Mycelia.sol";

contract MyceliaTest is Test {
    function testDataVerification() public {
        address oracle = 0x863060863ECc346dAf56566Fb6f3842ECE74A180;

        Mycelia mycelia = new Mycelia(oracle);

        Schnorr.SchnorrSignature memory sig = Schnorr.SchnorrSignature({
            parity: 28,
            px: 0x40822101b62ed3ad321fe7c140fea79ee90f43c392f04b3784e7ff9c644ffed4,
            message: 0xb76929c381d1ca8b5ea69d4f69ef61d234effc844481959ff5cd23eff9277df5,
            e: 0xa2fdcd6f4de6028a6510e92ad651c6aec2bd9cd4bc894e3bb4438407c8c9184b,
            s: 0x5debd610848954b9da43b3b6b3b37c680a8979281206687eef403f0b5f857f4d
        });

        uint256 chainId = 1;
        address _contract = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
        bytes memory data = hex"70a08231000000000000000000000000a75b7833c78eba62f1c5389f811ef3a7364d44de";
        bytes memory response = hex"000000000000000000000000000000000000000000000000000000000ca61150";

        bytes memory verifiedResponse = mycelia.verify(chainId, _contract, data, response, sig);

        assertEq(response, verifiedResponse);
    }
}
