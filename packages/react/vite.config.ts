import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: {
        index: "./src/index.ts",
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [tsconfigPaths(), dts(), react()],
  test: {
    environment: "jsdom",
    reporters: "verbose",
    globals: true,
    coverage: {
      all: true,
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["**/*.stories.tsx", "**/*.spec.tsx"],
    },
  },
});
