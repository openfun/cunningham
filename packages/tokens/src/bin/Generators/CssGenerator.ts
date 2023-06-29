import * as path from "path";
import { flatify } from "Utils/Flatify";
import Config from "Config";
import { Generator, resolveRefs } from "Generators/index";
import { put } from "Utils/Files";
import { Tokens } from "TokensGenerator";

export const cssGenerator: Generator = async (tokens, opts) => {
  // Replace refs by CSS variables.
  tokens = resolveRefs(tokens, (ref) => {
    const cssVar =
      "--" +
      Config.sass.varPrefix +
      ref.replaceAll(".", Config.sass.varSeparator);
    return `var(${cssVar})`;
  });

  const flatTokens = flatify(tokens, Config.sass.varSeparator);
  const cssVars = Object.keys(flatTokens).reduce((acc, token) => {
    return (
      acc + `\t--${Config.sass.varPrefix}${token}: ${flatTokens[token]};\n`
    );
  }, "");
  let cssContent = `${opts.selector} {\n${cssVars}}`;
  if (opts.utilityClasses) {
    cssContent += ` ${generateClasses(tokens)}`;
  }

  const dest = path.join(opts.path, Config.tokenFilename + ".css");

  put(dest, cssContent);
};

function generateClasses(tokens: Tokens) {
  return [
    ...generateColorClasses(tokens),
    ...generateFontClasses(tokens),
    ...generateSpacingClasses(tokens),
  ].join("\n");
}

function generateColorClasses(tokens: Tokens) {
  return [...generateClrClasses(tokens), ...generateBgClasses(tokens)];
}

/**
 * Generate background color classes.
 * Example: .bg-primary-500
 *
 * @param tokens
 */
function generateBgClasses(tokens: Tokens) {
  return Object.keys(tokens.theme.colors).map(
    (key) =>
      `.bg-${key} { background-color: var(--${Config.sass.varPrefix}theme--colors--${key}); }`
  );
}

/**
 * Generate color classes.
 * Example: .clr-primary-500
 *
 * @param tokens
 */
function generateClrClasses(tokens: Tokens) {
  return Object.keys(tokens.theme.colors).map(
    (key) =>
      `.clr-${key} { color: var(--${Config.sass.varPrefix}theme--colors--${key}); }`
  );
}

function generateFontClasses(tokens: Tokens) {
  return [
    ...generateFwClasses(tokens),
    ...generateFsClasses(tokens),
    ...generateFClasses(tokens),
  ];
}

/**
 * Generate font weight classes.
 * Example: fw-bold
 *
 * @param tokens
 */
function generateFwClasses(tokens: Tokens) {
  return Object.keys(tokens.theme.font.weights).map(
    (key) =>
      `.fw-${key} { font-weight: var(--${Config.sass.varPrefix}theme--font--weights--${key}); }`
  );
}

/**
 * Generate font size classes.
 * Example: fs-m
 *
 * @param tokens
 */
function generateFsClasses(tokens: Tokens) {
  return Object.keys(tokens.theme.font.sizes).map(
    (key) =>
      `.fs-${key} { font-size: var(--${Config.sass.varPrefix}theme--font--sizes--${key}); }`
  );
}

/**
 * Generate font family classes.
 * Example: f-base
 *
 * @param tokens
 */
function generateFClasses(tokens: Tokens) {
  return Object.keys(tokens.theme.font.families).map(
    (key) =>
      `.f-${key} { font-family: var(--${Config.sass.varPrefix}theme--font--families--${key}); }`
  );
}

function generateSpacingClasses(tokens: Tokens) {
  return [...generateMarginClasses(tokens), ...generatePaddingClasses(tokens)];
}

/**
 * Generate margins classes.
 * Example: m-l, mr-l, mb-l, ml-l, mt-l
 *
 * @param tokens
 */
function generateMarginClasses(tokens: Tokens) {
  return Object.keys(tokens.theme.spacings).map(
    (key) =>
      `.m-${key} { margin: var(--${Config.sass.varPrefix}theme--spacings--${key}); }` +
      `.mb-${key} { margin-bottom: var(--${Config.sass.varPrefix}theme--spacings--${key}); }` +
      `.mt-${key} { margin-top: var(--${Config.sass.varPrefix}theme--spacings--${key}); }` +
      `.ml-${key} { margin-left: var(--${Config.sass.varPrefix}theme--spacings--${key}); }` +
      `.mr-${key} { margin-right: var(--${Config.sass.varPrefix}theme--spacings--${key}); }`
  );
}

/**
 * Generate paddings classes.
 * Example: p-l, pr-l, pb-l, pl-l, pt-l
 *
 * @param tokens
 */
function generatePaddingClasses(tokens: Tokens) {
  return Object.keys(tokens.theme.spacings).map(
    (key) =>
      `.p-${key} { padding: var(--${Config.sass.varPrefix}theme--spacings--${key}); }` +
      `.pb-${key} { padding-bottom: var(--${Config.sass.varPrefix}theme--spacings--${key}); }` +
      `.pt-${key} { padding-top: var(--${Config.sass.varPrefix}theme--spacings--${key}); }` +
      `.pl-${key} { padding-left: var(--${Config.sass.varPrefix}theme--spacings--${key}); }` +
      `.pr-${key} { padding-right: var(--${Config.sass.varPrefix}theme--spacings--${key}); }`
  );
}
