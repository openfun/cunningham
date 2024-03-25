import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist",
    copyPublicDir: false,
    lib: {
      entry: {
        icons: "./src/icons.scss",
      },
      formats: ["es"],
    },
    rollupOptions: {
      input: "src/icons.scss",
      output: {
        assetFileNames: "icons.css",
      },
    },
  },
});
