import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    overflow: auto;
    margin: 0;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    color: ${theme.text};
    background: ${theme.mainBg};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
 
  h1, h2, h3, h4, h5, h6 {
    font-family: "Alegreya Sans", sans-serif;
    margin: 0;
    line-height: 1.1em;
  }

  h1 {
    font-size: 3.125em;
  }

  h2 {
    font-size: 2.618em;
  }

  h3 {
    font-size: 1.931em;
  }

  h4 {
    font-size: 1.618;
  }

  h5 {
    font-size: 1.194em;
  }

  h6 {
    font-size: 1em;
  }

  p {
    margin: 0;
  }
`;

export default GlobalStyle;
