const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Counter', function () {
  it('can increment the counter', async function () {
    const Counter = await ethers.getContractFactory('Counter');
    const counter = await Counter.deploy();
    await counter.deployed();

    const incrementTx = await counter.increment();
    await expect(incrementTx).to.emit(counter, 'Increment').withArgs(1);

    await incrementTx.wait();
  });
});
