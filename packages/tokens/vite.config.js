import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import hashbang from "rollup-plugin-hashbang";
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: {
        index: './src/index.ts',
      },
      formats: ["es", "cjs"],
    },
  },
  plugins: [dts()],
})