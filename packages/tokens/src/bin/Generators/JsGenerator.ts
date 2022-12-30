import path from "path";
import { Generator } from "Generators/index";
import Config from "Config";
import { put } from "Utils/Files";
import { Tokens } from "TokensGenerator";

export const jsGenerator: Generator = async (tokens, opts) => {
  const dest = path.join(opts.path, Config.tokenFilename + ".js");
  put(dest, await jsGeneratorContent(tokens));
};

export const jsGeneratorContent = async (tokens: Tokens) => {
  const variable = JSON.stringify(tokens);
  return `export const tokens = ${variable};`;
};
