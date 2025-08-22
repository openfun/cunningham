import * as path from "path";
import { flatify } from "Utils/Flatify";
import Config from "Config";
import { Generator, resolveRefs } from "Generators/index";
import { put } from "Utils/Files";
import { Tokens } from "TokensGenerator";

export const THEME_CLASSNAME_PREFIX = "cunningham-theme--";

export const cssGenerator: Generator = async (tokens, opts) => {
  // Replace refs by CSS variables.
  tokens = resolveRefs(tokens, (ref) => {
    const cssVar =
      "--" +
      Config.sass.varPrefix +
      ref.replaceAll(".", Config.sass.varSeparator);
    return `var(${cssVar})`;
  });

  const { default: defaultTheme, ...otherThemes } = tokens.themes;

  const flatTokens = flatify(defaultTheme, Config.sass.varSeparator);
  const cssVars = Object.keys(flatTokens).reduce((acc, token) => {
    return (
      acc +
      `\t--${Config.sass.varPrefix}${token.toLowerCase()}: ${
        flatTokens[token]
      };\n`
    );
  }, "");
  let cssContent = `${opts.selector} {\n${cssVars}}`;

  Object.entries(otherThemes).forEach(([themeName, themeTokens]) => {
    const flatTokensOther = flatify(themeTokens, Config.sass.varSeparator);
    const themeCssVars = Object.keys(flatTokensOther).reduce((acc, token) => {
      return (
        acc +
        `\t--${Config.sass.varPrefix}${token}: ${flatTokensOther[token]};\n`
      );
    }, "");
    cssContent += `\n.${THEME_CLASSNAME_PREFIX}${themeName}{\n${themeCssVars}}`;
  });

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
    ...generateBorderClasses(tokens),
    ...generateContentClasses(tokens),
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
  return [
    ...Object.keys(tokens.themes.default.globals.colors).map(
      (key) =>
        `.bg-${key} { background-color: var(--${Config.sass.varPrefix}globals--colors--${key}); }`,
    ),
    ...Object.keys(tokens.themes.default.contextuals.background).flatMap(
      (type) => {
        const values =
          tokens.themes.default.contextuals.background[
            type as keyof typeof tokens.themes.default.contextuals.background
          ];
        // For each subkey (e.g., primary, secondary, etc.), generate a class
        return Object.keys(values).map(
          (subkey) =>
            `.bg-${type}-${subkey} { background-color: var(--${Config.sass.varPrefix}contextuals--background--${type}--${subkey}); }`,
        );
      },
    ),
  ];
}

function generateBorderClasses(tokens: Tokens) {
  return Object.keys(tokens.themes.default.contextuals.border).flatMap(
    (type) => {
      const values =
        tokens.themes.default.contextuals.border[
          type as keyof typeof tokens.themes.default.contextuals.border
        ];
      // For each subkey (e.g., primary, secondary, etc.), generate a class
      return Object.keys(values).flatMap((subkey) => [
        `.border-clr-${type}-${subkey} { border-color: var(--${Config.sass.varPrefix}contextuals--background--${type}--${subkey}); }`,
        `.border-thin-${type}-${subkey} { border: 1px solid var(--${Config.sass.varPrefix}contextuals--background--${type}--${subkey}); }`,
      ]);
    },
  );
}

function generateContentClasses(tokens: Tokens) {
  return Object.keys(tokens.themes.default.contextuals.content).flatMap(
    (type) => {
      if (type === "logo1" || type === "logo2") {
        return [
          `.clr-content-${type} { color: var(--${Config.sass.varPrefix}contextuals--content--${type}); }`,
        ];
      }

      const values =
        tokens.themes.default.contextuals.content[
          type as keyof typeof tokens.themes.default.contextuals.content
        ];
      // For each subkey (e.g., primary, secondary, etc.), generate a class
      return Object.keys(values).flatMap((subkey) => [
        `.clr-content-${type}-${subkey} { color: var(--${Config.sass.varPrefix}contextuals--content--${type}--${subkey}); }`,
      ]);
    },
  );
}

/**
 * Generate color classes.
 * Example: .clr-primary-500
 *
 * @param tokens
 */
function generateClrClasses(tokens: Tokens) {
  return Object.keys(tokens.themes.default.globals.colors).map(
    (key) =>
      `.clr-${key} { color: var(--${Config.sass.varPrefix}globals--colors--${key}); }`,
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
  return Object.keys(tokens.themes.default.globals.font.weights).map(
    (key) =>
      `.fw-${key} { font-weight: var(--${Config.sass.varPrefix}globals--font--weights--${key}); }`,
  );
}

/**
 * Generate font size classes.
 * Example: fs-m
 *
 * @param tokens
 */
function generateFsClasses(tokens: Tokens) {
  return Object.keys(tokens.themes.default.globals.font.sizes).map(
    (key) =>
      `.fs-${key} { 
        font-size: var(--${Config.sass.varPrefix}globals--font--sizes--${key}); 
        letter-spacing: var(--${Config.sass.varPrefix}globals--font--letterspacings--${key}); 
      }`,
  );
}

/**
 * Generate font family classes.
 * Example: f-base
 *
 * @param tokens
 */
function generateFClasses(tokens: Tokens) {
  return Object.keys(tokens.themes.default.globals.font.families).map(
    (key) =>
      `.f-${key} { font-family: var(--${Config.sass.varPrefix}globals--font--families--${key}); }`,
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
  return Object.keys(tokens.themes.default.globals.spacings).map(
    (key) =>
      `.m-${key} { margin: var(--${Config.sass.varPrefix}globals--spacings--${key}); }` +
      `.mb-${key} { margin-bottom: var(--${Config.sass.varPrefix}globals--spacings--${key}); }` +
      `.mt-${key} { margin-top: var(--${Config.sass.varPrefix}globals--spacings--${key}); }` +
      `.ml-${key} { margin-left: var(--${Config.sass.varPrefix}globals--spacings--${key}); }` +
      `.mr-${key} { margin-right: var(--${Config.sass.varPrefix}globals--spacings--${key}); }`,
  );
}

/**
 * Generate paddings classes.
 * Example: p-l, pr-l, pb-l, pl-l, pt-l
 *
 * @param tokens
 */
function generatePaddingClasses(tokens: Tokens) {
  return Object.keys(tokens.themes.default.globals.spacings).map(
    (key) =>
      `.p-${key} { padding: var(--${Config.sass.varPrefix}globals--spacings--${key}); }` +
      `.pb-${key} { padding-bottom: var(--${Config.sass.varPrefix}globals--spacings--${key}); }` +
      `.pt-${key} { padding-top: var(--${Config.sass.varPrefix}globals--spacings--${key}); }` +
      `.pl-${key} { padding-left: var(--${Config.sass.varPrefix}globals--spacings--${key}); }` +
      `.pr-${key} { padding-right: var(--${Config.sass.varPrefix}globals--spacings--${key}); }`,
  );
}
