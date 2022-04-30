import React from 'react';
import { useMetaMask } from 'metamask-react';
import Card from './components/Card';
import Header from './components/Header';
import Address from './components/Address';
import ConnectWallet from './components/ConnectWallet';
import Error from './components/Error';
import Counter from './components/Counter';
import { networkId, networkName } from './config';

const App = () => {
  const { status, chainId } = useMetaMask();

  const isMetamaskUnavailable = status === 'unavailable';
  const isWalletConnected = status === 'connected';
  const isCorrectNetwork = chainId === networkId;

  let main = null;

  if (isMetamaskUnavailable) {
    main = (
      <Error>
        <p>MetaMask is not found.</p>
        <p>
          This app requires{' '}
          <a href="https://metamask.io/" target="_blank">
            MetaMask
          </a>{' '}
          extension.
        </p>
      </Error>
    );
  } else if (isWalletConnected) {
    if (isCorrectNetwork) {
      main = <Counter />;
    } else {
      main = (
        <Error>
          <p>Wrong network.</p>
          <p>Please use {networkName}.</p>
        </Error>
      );
    }
  } else {
    main = <ConnectWallet />;
  }

  return (
    <React.Fragment>
      <Card>
        <Header>Counter</Header>
        {main}
      </Card>
      <Address />
    </React.Fragment>
  );
};

export default App;
