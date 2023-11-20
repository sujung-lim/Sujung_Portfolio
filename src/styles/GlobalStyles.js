import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Nanum Pen Script', cursive;
    text-decoration: none;
  }

  a {
    color: inherit;
  }

  :root {
    --back-color: #F6EFE5;
    // --point-color: #DB3326; /*살짝 쨍한 빨강*/
    --point-color: #cb272c;
    --gray-color: #DEDCDC;
    --pink-color: #EBC4C3;
  }
`;

export default GlobalStyles;
