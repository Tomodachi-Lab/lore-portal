import { createGlobalStyle } from 'styled-components';
import { fontFamilies, theme } from './theme';

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
    margin: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${fontFamilies.body}, sans-serif;
    color: ${theme.text};
    background: ${theme.mainBg};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${theme.primary};

    transition: opacity 200ms ease-in-out;
    &:hover {
      opacity: .75;
    }
  }
 
  h1, h2, h3, h4, h5, h6 {
    font-family: ${fontFamilies.titles}, sans-serif;
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
