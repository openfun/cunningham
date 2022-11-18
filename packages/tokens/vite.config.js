import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: {
        cunningham: './src/cunningham.ts'
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      output: {
        banner: '#!/usr/bin/env node'
      },
      external: ['chalk', 'figlet'],
    }
  }
})