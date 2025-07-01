import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: false, // Optional: easier to debug
    rollupOptions: {
      // Add peer dependencies to external if needed, e.g. external: ['react']
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
      external: ["react", "react/jsx-runtime"],
    },
  },
});
