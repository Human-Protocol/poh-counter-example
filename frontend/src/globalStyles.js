import { css } from '@emotion/react';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
  * {
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
  }
  body {
    min-height: 100%;
    font-family: 'Varela Round', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(180deg, #523ec2 0%, rgba(196, 196, 196, 0) 100%)
      no-repeat;
    font-size: 1.33rem;
    color: #31267c;
    margin: 0;
    padding: 0;
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    margin: 0.33rem;
  }
`;

export default globalStyles;
