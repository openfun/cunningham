import path from "path";
import * as fs from "fs";
import deepmerge from "deepmerge";
import { ConfigShape } from "TokensGenerator";
import { workPath } from "Paths";
import { register } from "ts-node";
import Config from "./Config";

const getLocalConfig = async () => {
  const filename = Config.configurationFilenames
    .map((filename_) => path.join(workPath(), filename_))
    .find((filename_) => fs.existsSync(filename_));

  if (!filename) {
    console.log("No local config found, using default config.");
    return {};
  }
  console.log("Found local config file: " + filename);

  const ext = path.extname(filename);
  if (ext === ".ts") {
    registerTypescriptLoader();
  }

  const config = await import(filename);
  return config.default;
};

/**
 * Register ts-node to load typescript config files with import. ( In fact, with `require` after transpiling ).
 */
const registerTypescriptLoader = () => {
  // Specifying to load all .ts files as CJS is really important, otherwise ts-node will try to load them as ESM in
  // projects where cunningham is used as a dependency where package.json contains "type": "module".
  // So, by doing this we tell ts-node "Load all .ts files as CJS, even if they are in a project with ESM".
  register({
    moduleTypes: {
      "**/*.ts": "cjs",
    },
    compilerOptions: {
      module: "commonjs",
    },
  });
};

const getDistConfig = async () => {
  const config = await import("./cunningham.dist.js");
  return config.default;
};

export const getConfig = async () => {
  const localConfig = await getLocalConfig();
  const distConfig = await getDistConfig();
  const config: ConfigShape = deepmerge(distConfig, localConfig);
  return config;
};
