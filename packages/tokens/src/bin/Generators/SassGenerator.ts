import path from "path";
import { Generator } from "Generators/index";
import Config from "Config";
import { put } from "Utils/Files";
import { Tokens } from "TokensGenerator";

export const sassGenerator: Generator = async (tokens, opts) => {
  const sassContent = generateSassMaps(tokens);
  const outputPath = path.join(opts.path, Config.tokenFilename + ".scss");
  put(outputPath, sassContent);
};

const generateSassMaps = (tokens: Tokens) => {
  return [
    generateColorsSassMap(tokens),
    generateFontSassMap(tokens),
    generateSpacingsSassMap(tokens),
    generateTransitionsSassMap(tokens),
  ].join("\n");
};

// Generate colors sass map with the ability to create sub map
// for a color with shades.
// Example: `primary-500: #000` will return `primary: (500: #000)`
const generateColorsSassMap = (tokens: Tokens) => {
  const colors = Object.entries(tokens.theme.colors).reduce(
    propertiesReducer,
    {}
  );

  return `$colors: ${JSONToSassMap(colors)};`;
};
const generateFontSassMap = (tokens: Tokens) => {
  return [
    generateFontFamiliesSassMap(tokens),
    generateFontSizesSassMap(tokens),
    generateFontWeightsSassMap(tokens),
  ].join("\n");
};
const generateFontFamiliesSassMap = (tokens: Tokens) => {
  return `$fontFamilies: ${JSONToSassMap(tokens.theme.font.families)};`;
};
const generateFontSizesSassMap = (tokens: Tokens) => {
  return `$fontSizes: ${JSONToSassMap(tokens.theme.font.sizes)};`;
};
const generateFontWeightsSassMap = (tokens: Tokens) => {
  return `$fontWeights: ${JSONToSassMap(tokens.theme.font.weights)};`;
};
const generateSpacingsSassMap = (tokens: Tokens) => {
  return `$spacings: ${JSONToSassMap(tokens.theme.spacings)};`;
};

const generateTransitionsSassMap = (tokens: Tokens) => {
  return `$transitions: ${JSONToSassMap(tokens.theme.transitions)};`;
};

function JSONToSassMap(json: Object) {
  function deepQuoteObjectKeys(object: Object) {
    return Object.entries(object).reduce(
      (acc, [key, value]): Record<string, any> => ({
        ...acc,
        [`'${key}'`]:
          typeof value === "object" ? deepQuoteObjectKeys(value) : value,
      }),
      {}
    );
  }
  const jsonWithQuotedKeys = deepQuoteObjectKeys(json);

  return JSON.stringify(jsonWithQuotedKeys, null, 2)
    .replace(/{/g, "(")
    .replace(/}/g, ")")
    .replace(/"/g, "");
}

function propertiesReducer(
  propertyMap: Record<string, string | Record<string, string>>,
  [key, value]: [string, string]
) {
  const [property, subProperty] = key.split("-");

  if (subProperty) {
    if (propertyMap[property] === undefined) {
      propertyMap[property] = {};
    }
    (propertyMap[property] as Record<string, string>)[subProperty] = value;
  } else {
    propertyMap[property] = value;
  }

  return propertyMap;
}
