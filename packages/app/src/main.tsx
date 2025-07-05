import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DSThemeProvider, theme } from "nexus-library";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) =>
      theme.colors.surface.background.gray.subtle};
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DSThemeProvider themeTokens={theme} colorScheme="light">
      <GlobalStyle />
      <App />
    </DSThemeProvider>
  </StrictMode>
);
