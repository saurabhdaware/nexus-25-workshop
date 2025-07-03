import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    // plugin to build react components
    react(),

    // plugin to create types from ts files
    dts({
      insertTypesEntry: true,
      outDir: "dist",
      include: ["src/**/*"],
      exclude: ["src/**/*.test.*", "src/**/*.stories.*"],
      tsconfigPath: "tsconfig.json",
    }),
  ],
  build: {
    // entry files definitions
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.tsx"),
      },
      formats: ["es"],
    },

    // output directory
    outDir: "dist",

    // keeping minify: false to easily understand the code
    minify: false,
    rollupOptions: {
      // Marking react as external to avoid bundling it with the library
      external: ["react", "react/jsx-runtime"],
      output: {
        // preserve modules to keep the original file structure and not merge them into a single file
        preserveModules: true,
        preserveModulesRoot: "src",
        assetFileNames: "[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
