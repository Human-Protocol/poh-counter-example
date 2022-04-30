import React from 'react';
import { useMetaMask } from 'metamask-react';
import Button from './Button';

const ConnectWallet = () => {
  const { connect } = useMetaMask();

  return (
    <React.Fragment>
      <p>Welcome!</p>
      <Button onClick={connect}>Connect wallet</Button>
    </React.Fragment>
  );
};

export default ConnectWallet;
