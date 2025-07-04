import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeTokens } from "../tokens/theme";

interface DSThemeProviderProps {
  themeTokens: ThemeTokens;
  colorScheme: keyof ThemeTokens["colors"];
  children: React.ReactNode;
}

const DSThemeProvider = ({
  themeTokens,
  colorScheme,
  children,
}: DSThemeProviderProps) => {
  const selectedTheme = {
    colors: themeTokens.colors[colorScheme],
  };

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export { DSThemeProvider };
