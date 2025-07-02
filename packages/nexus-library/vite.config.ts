import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    // @ts-expect-error: vite version compatibility issue
    react(),
    dts({
      insertTypesEntry: true,
      outDir: "dist",
      include: ["src/**/*"],
      exclude: ["src/**/*.test.*", "src/**/*.stories.*"],
      tsconfigPath: "tsconfig.json",
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        styles: resolve(__dirname, "src/styles.css"),
      },
      formats: ["es"],
    },
    outDir: "dist",
    minify: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        assetFileNames: "[name][extname]",
        entryFileNames: "[name].js",
      },
    },
    cssCodeSplit: true,
  },
});
