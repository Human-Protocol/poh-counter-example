import React from 'react';
import ReactDOM from 'react-dom';
import { MetaMaskProvider } from 'metamask-react';
import { Global } from '@emotion/react';
import App from './App';
import globalStyles from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <MetaMaskProvider>
      <App />
    </MetaMaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
