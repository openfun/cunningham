module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json"],
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "vite.config.ts",
          "vite.icons.config.mts",
          "vite.fonts.config.mts",
          "cunningham.ts",
          "**/*.stories.tsx",
          "**/*.spec.tsx",
          "src/tests/*",
          "**/stories-utils.tsx",
          "**/reactHookFormUtils.tsx"
        ],
      },
    ],
  },
};
