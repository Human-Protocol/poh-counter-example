import { css } from '@emotion/react';
import Spinner from './Spinner';

const Button = ({ children, loading, ...rest }) => {
  return (
    <button
      css={css`
        width: 100%;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border: 2px solid #503fc1;
        border-radius: 12px;
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        color: #503fc1;
        font-family: 'Varela Round', sans-serif;
        font-size: 1.2rem;
        letter-spacing: 0.08rem;
        cursor: pointer;
        &:disabled,
        &[disabled] {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}
      disabled={loading}
      {...rest}
    >
      {loading ? <Spinner size="16" /> : children}
    </button>
  );
};

export default Button;
