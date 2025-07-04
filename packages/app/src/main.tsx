import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DSThemeProvider, theme } from "nexus-library";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DSThemeProvider themeTokens={theme} colorScheme="dark">
      <App />
    </DSThemeProvider>
  </StrictMode>
);
