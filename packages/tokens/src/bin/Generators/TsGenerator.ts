import path from "path";
import { Generator } from "Generators/index";
import Config from "Config";
import { put } from "Utils/Files";
import { jsGeneratorContent } from "Generators/JsGenerator";

export const tsGenerator: Generator = async (tokens, opts) => {
  const dest = path.join(opts.path, Config.tokenFilename + ".ts");
  put(dest, await jsGeneratorContent(tokens));
};
