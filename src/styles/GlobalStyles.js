import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Nanum Pen Script', cursive;
  }

  :root {
    --back-color: #F6EFE5;
    --point-color: #DB3326;
  }
`;

export default GlobalStyles;
