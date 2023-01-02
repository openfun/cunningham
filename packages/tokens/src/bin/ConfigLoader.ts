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

const registerTypescriptLoader = () => {
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
