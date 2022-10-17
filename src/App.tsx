import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import { GlobalStyle } from "./styles/globalstyle";
import Default from "./styles/themes/Default";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={ Default }>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}