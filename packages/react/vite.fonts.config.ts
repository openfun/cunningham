import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist",
    copyPublicDir: false,
    lib: {
      entry: {
        fonts: "./src/fonts.scss",
      },
      formats: ["es"],
    },
    rollupOptions: {
      input: "src/fonts.scss",
      output: {
        assetFileNames: "fonts.css",
      },
    },
  },
});
