import { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "#ansi-styles": "ansi-styles/index.js",
    "#supports-color": "supports-color/index.js",
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.m?[tj]sx?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.json",
        useESM: true,
        isolatedModules: true,
      },
    ],
  },
  transformIgnorePatterns: ["/node_modules/(?!(chalk))"],
};

export default jestConfig;
