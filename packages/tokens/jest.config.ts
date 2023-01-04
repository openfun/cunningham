import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src/bin"],
  setupFiles: ["<rootDir>/src/bin/tests/Setup.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      // required due to custom location of tsconfig.json configuration file
      // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig
      { tsconfig: "./src/bin/tsconfig.json" },
    ],
  },
};

export default jestConfig;
