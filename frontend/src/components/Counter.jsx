import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { ethers } from 'ethers';
import { useMetaMask } from 'metamask-react';
import { useProofOfHumanity } from 'poh-react';
import HCaptchaValidator from 'poh-validator-hcaptcha-react';
import Button from './Button';
import Spinner from './Spinner';
import Error from './Error';
import { contractAddress, validatorApiUrl, hcaptchaSitekey } from '../config';

const abi = [
  'function counter() view returns (uint256)',
  'function increment(bytes calldata proof)',
  'event Increment(uint256 currentCounter)'
];

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Value = styled.div`
  font-size: 6rem;
  text-align: center;
  color: #241a66;
`;

function Counter() {
  const { ethereum } = useMetaMask();

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const counterContract = new ethers.Contract(contractAddress, abi, provider);
    counterContract.counter().then((value) => {
      setCount(Number(value));
      setInitialized(true);
    });
    counterContract.on('Increment', (newValue) => {
      setCount(Number(newValue));
    });

    return () => counterContract.removeAllListeners();
  }, [ethereum]);

  const validator = (
    <HCaptchaValidator
      validatorApiUrl={validatorApiUrl}
      sitekey={hcaptchaSitekey}
    />
  );
  const { getProofOfHumanity } = useProofOfHumanity(validator, {
    type: 'sovereign',
    ethereum
  });

  if (!initialized) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }

  const handleErrorDismiss = () => {
    setErrorMessage(null);
  };

  if (errorMessage) {
    return (
      <Error onDismiss={handleErrorDismiss}>
        <p>{errorMessage}</p>
      </Error>
    );
  }

  const setError = (message) => {
    setErrorMessage(String(message).slice(0, 80));
  };

  const handleIncrement = async () => {
    setLoading(true);

    try {
      const { error, errorMessage, proof } = await getProofOfHumanity();
      if (error) {
        setError(errorMessage);
        setLoading(false);
        return;
      }

      const provider = new ethers.providers.Web3Provider(ethereum);
      const counterContract = new ethers.Contract(
        contractAddress,
        abi,
        provider
      );
      const signer = provider.getSigner();
      const counterWithSigner = counterContract.connect(signer);

      const tx = await counterWithSigner.increment(proof);
      const { events } = await tx.wait();
      if (events.length > 0 && events[0].args.currentCounter) {
        setCount(Number(events[0].args.currentCounter));
      }
    } catch (error) {
      console.error(error);
      setError(error.message || String(error));
    }

    setLoading(false);
  };

  return (
    <React.Fragment>
      <Value>{count}</Value>
      <Button onClick={handleIncrement} loading={loading}>
        Increment
      </Button>
    </React.Fragment>
  );
}

export default Counter;
