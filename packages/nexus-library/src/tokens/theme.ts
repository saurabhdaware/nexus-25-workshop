const globalTokens = {
  colors: {
    azure: {
      100: "#E6F0FF",
      200: "#B3D6FF",
      300: "#80BCFF",
      400: "#4D9FFF",
      500: "#1A85FF",
      600: "#0066CC",
      700: "#004D99",
    },
    staticWhite: "#FFFFFF",
    staticBlack: "#000000",
  },
};

const theme = {
  colors: {
    light: {
      surface: {
        background: {
          primary: globalTokens.colors.azure[500],
        },
        text: {
          onPrimary: globalTokens.colors.staticWhite,
        },
      },
    },
    dark: {
      surface: {
        background: {
          primary: globalTokens.colors.azure[200],
        },
        text: {
          onPrimary: globalTokens.colors.staticBlack,
        },
      },
    },
  },
} as const;

type ThemeTokens = typeof theme;

type Theme = {
  colors: ThemeTokens["colors"]["light" | "dark"];
};

export { theme };
export type { Theme, ThemeTokens };

// styled-components theme typing
import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: Theme["colors"];
  }
}
