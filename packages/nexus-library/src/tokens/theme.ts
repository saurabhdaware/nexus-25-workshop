const globalTokens = {
  colors: {
    azure: {
      "050": "#F5F8FF",
      "100": "#D8E4FD",
      "200": "#B4CDFD",
      "300": "#75A3FF",
      "400": "#4D7FFF",
      "500": "#305EFF",
      "600": "#2950DA",
      "700": "#2243B6",
      "800": "#1B3591",
      "900": "#14286D",
      "1000": "#0D1A48",
    },
    neutral: {
      "000": "#FFFFFF",
      "050": "#F8FAFC",
      "100": "#F1F5FA",
      "200": "#E3EAF3",
      "300": "#CBD5E2",
      "400": "#B1C1D2",
      "500": "#90A5BB",
      "600": "#768EA7",
      "700": "#6C849D",
      "800": "#58728D",
      "900": "#40566D",
      "1000": "#2F4256",
      "1100": "#243547",
      "1200": "#192839",
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
          primary: {
            intense: globalTokens.colors.azure[500],
          },
          gray: {
            subtle: globalTokens.colors.neutral["050"],
          },
        },
        text: {
          onPrimary: {
            onIntense: globalTokens.colors.staticWhite,
          },
          gray: {
            normal: globalTokens.colors.neutral["900"],
          },
        },
      },
    },
    dark: {
      surface: {
        background: {
          primary: {
            intense: globalTokens.colors.azure[300],
          },
          gray: {
            subtle: globalTokens.colors.neutral["1100"],
          },
        },
        text: {
          onPrimary: {
            onIntense: globalTokens.colors.staticBlack,
          },
          gray: {
            normal: globalTokens.colors.neutral["200"],
          },
        },
      },
    },
  },
  spacing: {
    "0": "0px",
    "1": "2px",
    "2": "4px",
    "3": "8px",
    "4": "12px",
    "5": "16px",
    "6": "20px",
    "7": "24px",
    "8": "32px",
    "9": "40px",
    "10": "48px",
    "11": "56px",
  },
} as const;

type ThemeTokens = typeof theme;

type Theme = {
  colors: ThemeTokens["colors"]["light" | "dark"];
  spacing: ThemeTokens["spacing"];
};

// Type utility to generate all possible dotted string paths to leaf values from a nested object type
// Example: DottedPaths<{ a: { b: { c: string } } }> => 'a.b.c'
type DottedPaths<T, Prefix extends string = ""> = {
  [K in keyof T]: K extends string
    ? T[K] extends Record<string, unknown>
      ? DottedPaths<T[K], Prefix extends "" ? K : `${Prefix}.${K}`>
      : Prefix extends ""
      ? K
      : `${Prefix}.${K}`
    : never;
}[keyof T];

type ThemeDottedStrings<T extends keyof Theme> = DottedPaths<Theme[T]>;

export { theme };
export type { Theme, ThemeTokens, DottedPaths, ThemeDottedStrings };
