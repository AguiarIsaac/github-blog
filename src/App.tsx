import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import { SearchFormContextProvider } from "./contexts/SearchFormContext";
import { GlobalStyle } from "./styles/globalstyle";
import Default from "./styles/themes/Default";

export function App() {
  return (
    <ThemeProvider theme={Default}>
      <SearchFormContextProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </SearchFormContextProvider>
    </ThemeProvider>
  )
}