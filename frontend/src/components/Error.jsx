import React from 'react';
import { css } from '@emotion/react';
import error from '../assets/error.svg';
import Button from './Button';

const Error = ({ onDismiss, children }) => {
  const dismissButton = onDismiss ? (
    <Button onClick={onDismiss}>Dismiss</Button>
  ) : null;

  return (
    <div
      css={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 100%;
      `}
    >
      <img
        css={css`
          width: 48px;
          height: 48px;
          margin: 1.5rem 0;
        `}
        src={error}
      />
      <div
        css={css`
          flex: 1;
          max-width: 100%;
        `}
      >
        {children}
      </div>
      {dismissButton}
    </div>
  );
};

export default Error;
