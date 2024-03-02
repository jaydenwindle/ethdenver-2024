// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Schnorr} from "../src/Schnorr.sol";
import {Mycelia} from "../src/Mycelia.sol";

contract MyceliaTest is Test {
    function testDataVerification() public {
        address oracle = 0x19a97E9Aa62e87030B43fED56164051A9390DE00;

        Mycelia mycelia = new Mycelia(oracle);

        Schnorr.SchnorrSignature memory sig = Schnorr.SchnorrSignature({
            parity: 27,
            px: 0x587f6e6866d7d78db5bbca19ba0104df3a144356793a6876175e1c5551e6a72a,
            message: 0x3c27f90b96e4359fda785ff38635301dfb42da53718ee161a90f718434f57ec8,
            e: 0xef6fcbcf33a1b8faeb53541119d73c830e1e770a41ce376b0c0241932b23be86,
            s: 0x95b2032d11f8e2979d253d967a691678ae9da5462dd1dfab4770927d8ffffd13
        });

        uint256 chainId = 1;
        bytes32 blockHash = 0xde8741ffc21b3f5fb56d379bdc522549ab2b15503419bb1540fd2b540385078d;
        address _contract = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
        bytes memory data = hex"70a08231000000000000000000000000a75b7833c78eba62f1c5389f811ef3a7364d44de";
        bytes memory response = hex"000000000000000000000000000000000000000000000000000000000ca61150";

        bytes memory verifiedResponse = mycelia.verify(chainId, blockHash, _contract, data, response, sig);

        assertEq(response, verifiedResponse);
    }
}
