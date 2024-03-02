// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";

import "../src/Mycelia.sol";

contract DeployMyceliaScript is Script {
    function setUp() public {}

    function run() public {
        vm.broadcast();

        new Mycelia{salt: 0}(0x7da00F9b7997Da14793b73712e037Fd9484b3e15);
    }
}
