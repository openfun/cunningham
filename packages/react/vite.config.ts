import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: {
        index: './src/index.ts'
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    }
  },
  plugins: [dts(), react()]
})
