import { useMetaMask } from 'metamask-react';
import { css } from '@emotion/react';

const Address = () => {
  const { status, account } = useMetaMask();

  const isWalletConnected = status === 'connected';

  if (!isWalletConnected) {
    return null;
  }

  const croppedAccount = `${account.slice(0, 6)}...${account.slice(-4)}`;

  return (
    <div
      css={css`
        color: #c5c0dc;
        font-size: 1rem;
      `}
    >
      Connected: {croppedAccount}
    </div>
  );
};

export default Address;
