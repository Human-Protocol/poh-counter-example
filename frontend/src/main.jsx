import React from 'react';
import ReactDOM from 'react-dom';
import { MetaMaskProvider } from 'metamask-react';
import { ProofOfHumanityProvider } from 'poh-react';
import { Global } from '@emotion/react';
import App from './App';
import globalStyles from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <MetaMaskProvider>
      <ProofOfHumanityProvider>
        <App />
      </ProofOfHumanityProvider>
    </MetaMaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
