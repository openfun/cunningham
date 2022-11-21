import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import hashbang from "rollup-plugin-hashbang";

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: {
        cunningham: './src/cunningham.ts',
        index: './src/index.ts',
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ['chalk', 'figlet'],
    }
  },
  plugins: [dts(), hashbang.default()]
})