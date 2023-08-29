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
          "vite.icons.config.ts",
          "vite.fonts.config.ts",
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
