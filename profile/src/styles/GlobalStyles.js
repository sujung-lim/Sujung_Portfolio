import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body, p, div {
    margin: 0;
    padding: 0;
    font-family: 'Nanum Pen Script', cursive;
  }
  img {
    display: block;
    margin: 0;
    padding: 0;
  }

  :root {
    --main-color: #eacdcc;
    --main-gray-color: #b0aeae;
  }
`;

export default GlobalStyles;
