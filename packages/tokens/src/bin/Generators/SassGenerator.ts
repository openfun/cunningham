import path from "path";
import { Generator, resolveRefs, resolveRefValue } from "Generators/index";
import Config from "Config";
import { put } from "Utils/Files";
import { Tokens } from "TokensGenerator";

export const sassGenerator: Generator = async (tokens, opts) => {
  tokens = resolveRefs(tokens, resolveRefValue);
  const sassContent = generateSassMaps(tokens);
  const outputPath = path.join(opts.path, Config.tokenFilename + ".scss");
  put(outputPath, sassContent);
};

const generateSassMaps = (tokens: Tokens) => {
  return Object.keys(tokens)
    .map((key) => {
      return toSassVariable(`$${key}`, tokens[key]);
    })
    .join("\n");
};

function toSassVariable(varName: string, value: any, isDefault = true) {
  const out = `${varName}: `;
  if (typeof value === "object") {
    return out + JSONToSassMap(value, isDefault);
  }
  return out + value;
}

function JSONToSassMap(json: Object, isDefault = true) {
  function deepQuoteObjectKeys(object: Object) {
    return Object.entries(object).reduce(
      (acc, [key, value]): Record<string, any> => ({
        ...acc,
        [`'${key}'`]:
          typeof value === "object" ? deepQuoteObjectKeys(value) : value,
      }),
      {},
    );
  }
  const jsonWithQuotedKeys = deepQuoteObjectKeys(json);

  return JSON.stringify(jsonWithQuotedKeys, null, 2)
    .replace(/{/g, "(")
    .replace(/}/g, ")")
    .replace(/"/g, "")
    .concat(isDefault ? " !default;" : "");
}
