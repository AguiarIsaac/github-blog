import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Nunito', sans-serif;
    color: ${props => props.theme.colors.baseText};
    background: ${props => props.theme.colors.baseBackground};
  }

  a {
    color: ${props => props.theme.colors.blue};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
  }
`