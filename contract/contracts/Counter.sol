//SPDX-License-Identifier: MIT
pragma solidity >=0.8.5 <0.9.0;

import "poh-contracts/contracts/HumanOnly.sol";

contract Counter is HumanOnly {
    uint256 public counter;

    event Increment(uint256 currentCounter);

    constructor() {
      setHumanityValidator(0x9064071eaB7c22E00e2d63233a9507d7107cFCD1);
    }

    function increment(bytes calldata proof) public sovereignPoH(proof) {
        counter++;

        if (counter > 99) {
          counter = 1;
        }

        emit Increment(counter);
    }
}
