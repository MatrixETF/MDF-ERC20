// contracts/MDF.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MDF is ERC20 {

    constructor(address account, uint256 initSupply) ERC20("MDF", "MDF") public {
        _mint(account, initSupply);
    }
}