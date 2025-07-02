import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Enable JSX components
  jsxFramework: "react",

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        azure: {
          100: { value: "#e6f0ff" },
          200: { value: "#cce0ff" },
          300: { value: "#99c2ff" },
          400: { value: "#66a3ff" },
          500: { value: "#3385ff" },
          600: { value: "#0066ff" },
          700: { value: "#004dcc" },
          800: { value: "#003399" },
          900: { value: "#001a66" },
        },
        gray: {
          100: { value: "#ffffff" },
          200: { value: "#e0e0e0" },
          300: { value: "#bdbdbd" },
          400: { value: "#9e9e9e" },
          500: { value: "#757575" },
          600: { value: "#616161" },
          700: { value: "#424242" },
          800: { value: "#212121" },
          900: { value: "#000000" },
        },
      },
      fonts: {
        body: {
          value: "Arial",
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: { base: "{colors.azure.700}", _dark: "{colors.azure.300}" },
        },
        text: {
          primary: { value: "{colors.primary}" },
          gray: {
            subtle: { value: "{colors.gray.400}" },
            medium: { value: "{colors.gray.600}" },
            dark: { value: "{colors.gray.800}" },
          },
        },
        background: {
          primary: {
            value: { base: "{colors.azure.700}", _dark: "{colors.azure.300}" },
            description: "Primary background color",
          },
          surface: {
            subtle: { value: "{colors.gray.100}" },
          },
        },
        "text-on-primary": {
          value: { base: "{colors.gray.100}", _dark: "{colors.gray.700}" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // Include global CSS layer
  globalCss: {
    html: {
      lineHeight: 1.5,
      textRendering: "optimizeLegibility",
    },
    body: {
      fontFamily: "system-ui, sans-serif",
    },
  },
});
