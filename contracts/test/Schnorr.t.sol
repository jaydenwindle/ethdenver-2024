// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Schnorr} from "../src/Schnorr.sol";

contract SchnorrTest is Test {
    function testSchnorrVerification() public view {
        uint8 parity = 27;
        bytes32 px = 0x7fffaef587206265b08bc288a64b1f67990cc068733be7150215b76e78a15eb7;
        bytes32 message = 0x6fd43e7cffc31bb581d7421c8698e29aa2bd8e7186a394b85299908b4eb9b175;
        bytes32 challenge = 0x3ae0e96e4941e82fbb52a42e5838a15aacedf04f3f3ec457a84227533a1f590a;
        bytes32 sigS = 0x5695d4f8272bf2a85de3bd5e4bfcedc5903789e38bc3825079fa456d48dbb9dd;

        console.log(Schnorr.verify(parity, px, message, challenge, sigS));
    }
}

// 0x047e32742eb7d8fbb9fde7d655ecb815eafb307c1c56d65e2d4806939534adc068d4298afc63d862835c89c610fe62d9a0ad3cdf586fd43e7cffc31bb581d7421c8698e29aa2bd8e7186a394b85299908b4eb9b175
// 0x047e32742eb7d8fbb9fde7d655ecb815eafb307c0356d65e2d4806939534adc068d4298afc63d862835c89c610fe62d9a0ad3cdf586fd43e7cffc31bb581d7421c8698e29aa2bd8e7186a394b85299908b4eb9b175
