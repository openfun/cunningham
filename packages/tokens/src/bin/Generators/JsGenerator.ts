import path from "path";
import { Generator, resolveRefs, resolveRefValue } from "Generators/index";
import Config from "Config";
import { put } from "Utils/Files";
import { Tokens } from "TokensGenerator";

export const jsGenerator: Generator = async (tokens, opts) => {
  tokens = resolveRefs(tokens, resolveRefValue);
  const dest = path.join(opts.path, Config.tokenFilename + ".js");
  put(dest, await jsGeneratorContent(tokens));
};

export const jsGeneratorContent = async (tokens: Tokens) => {
  const variable = JSON.stringify(tokens);
  return `export const tokens = ${variable};`;
};
