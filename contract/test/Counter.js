const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Counter', function () {
  it('can increment the counter', async function () {
    const [validator] = await ethers.getSigners();

    const randomChallenge =
      '0xef9990adc264ccc6e55bd0cfbf8dbef5177760273ee5aa3f65aae4bbb014750f';

    const timestamp = '0x623d0600'; // 2022-03-25 00:00:00Z

    validBasicProof = await generateBasicProof(
      randomChallenge,
      timestamp,
      validator
    );

    const Counter = await ethers.getContractFactory('Counter');
    const counter = await Counter.deploy();
    await counter.deployed();

    await counter.setHumanityValidator(validator.address);

    const incrementTx = await counter.increment(validBasicProof);
    await expect(incrementTx).to.emit(counter, 'Increment').withArgs(1);

    await incrementTx.wait();
    expect(await counter.counter()).to.equal(1);
  });
});

async function generateBasicProof(randomChallenge, timestamp, validator) {
  const hash = ethers.utils.keccak256(
    ethers.utils.hexConcat([randomChallenge, timestamp])
  );
  const validatorSignature = await validator.signMessage(
    ethers.utils.arrayify(hash)
  );
  const proof = ethers.utils.hexConcat([
    randomChallenge,
    timestamp,
    validatorSignature
  ]);
  return proof;
}
