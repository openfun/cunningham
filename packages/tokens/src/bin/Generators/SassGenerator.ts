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
  function toSassValue(value: any) {
    if (typeof value === "object") {
      return deepQuoteObjectKeys(value);
    }
    if (typeof value === "string") {
      // If we have value = Font 1, Font 2 it will break the map so we need to use interpolation operator.
      if (value.indexOf(",") >= 0) {
        return `#__OPEN_BRACKET__${value}__CLOSE_BRACKET__`;
      }
    }
    return value;
  }
  function deepQuoteObjectKeys(object: Object) {
    return Object.entries(object).reduce(
      (acc, [key, value]): Record<string, any> => ({
        ...acc,
        [`'${key}'`]: toSassValue(value),
      }),
      {},
    );
  }
  const jsonWithQuotedKeys = deepQuoteObjectKeys(json);

  return JSON.stringify(jsonWithQuotedKeys, null, 2)
    .replace(/{/g, "(")
    .replace(/}/g, ")")
    .replace(/"/g, "")
    .replace(/__OPEN_BRACKET__/g, "{")
    .replace(/__CLOSE_BRACKET__/g, "}")
    .concat(isDefault ? " !default;" : "");
}
