import { resolve } from "path";
import { defineConfig, BuildOptions } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let buildOptions: { watch: BuildOptions["watch"] };
  let emptyOutDir = true;
  if (mode.includes("watch")) {
    emptyOutDir = false;
    buildOptions = {
      watch: {
        include: ["src/**/*"],
      },
    };

    if (mode.includes("polling")) {
      buildOptions = {
        watch: {
          ...buildOptions.watch,
          chokidar: {
            usePolling: true,
            interval: 1000,
          },
        },
      };
    }
  }

  return {
    build: {
      emptyOutDir,
      outDir: "dist",
      sourcemap: true,
      lib: {
        entry: {
          index: "./src/index.ts",
        },
        formats: ["es", "cjs"],
        cssFileName: 'style'
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
      copyPublicDir: false,
      ...buildOptions,
    },
    plugins: [
      tsconfigPaths(),
      dts({
        rollupTypes: true,
        beforeWriteFile: (filePath, content) => {
          return {
            filePath,
            content: content.replace("../../locales", "./locales"),
          };
        },
      }),
      react(),
    ],
    test: {
      environment: "jsdom",
      reporters: "verbose",
      globals: true,
      watchExclude: ["**/cunningham-tokens.js"],
      coverage: {
        all: true,
        include: ["src/**/*.{ts,tsx}"],
        exclude: ["**/*.stories.tsx", "**/*.spec.tsx"],
      },
      globalSetup: ["src/tests/Global.ts"],
      setupFiles: ["src/tests/Setup.ts"],
    },
    resolve: {
      alias: [
        {
          find: ":",
          replacement: resolve(__dirname, "./src"),
        },
        {
          find: "src",
          replacement: resolve(__dirname, "./src"),
        }
      ],
    },
  };
});
