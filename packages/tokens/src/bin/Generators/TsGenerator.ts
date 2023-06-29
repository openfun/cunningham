import path from "path";
import { Generator, resolveRefs, resolveRefValue } from "Generators/index";
import Config from "Config";
import { put } from "Utils/Files";
import { jsGeneratorContent } from "Generators/JsGenerator";

export const tsGenerator: Generator = async (tokens, opts) => {
  tokens = resolveRefs(tokens, resolveRefValue);
  const dest = path.join(opts.path, Config.tokenFilename + ".ts");
  put(dest, await jsGeneratorContent(tokens));
};
