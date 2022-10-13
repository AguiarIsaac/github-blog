import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { GlobalStyle } from "./styles/globalstyle";
import Default from "./styles/themes/Default";

export function App() {
  return (
    <ThemeProvider theme={ Default }>
      <Header />
      <DefaultLayout />
      <GlobalStyle />
    </ThemeProvider>
  )
}