import { css } from '@emotion/react';
import spinner from '../assets/spinner.gif';

const Spinner = ({ size = 32 }) => (
  <img
    css={css`
      width: ${size}px;
      height: ${size}px;
    `}
    src={spinner}
  />
);

export default Spinner;
