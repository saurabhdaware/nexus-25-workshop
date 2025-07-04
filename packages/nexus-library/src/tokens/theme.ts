const theme = {
  colors: {
    light: {},
    dark: {},
  },
} as const;

type ThemeTokens = typeof theme;

type Theme = {
  colors: ThemeTokens["colors"]["light" | "dark"];
};

export { theme };
export type { Theme, ThemeTokens };
