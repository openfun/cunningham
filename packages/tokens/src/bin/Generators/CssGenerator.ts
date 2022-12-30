import * as path from "path";
import { flatify } from "Utils/Flatify";
import Config from "Config";
import { Generator } from "Generators/index";
import { put } from "Utils/Files";

export const cssGenerator: Generator = async (tokens, opts) => {
  const flatTokens = flatify(tokens, Config.sass.varSeparator);
  const cssVars = Object.keys(flatTokens).reduce((acc, token) => {
    return (
      acc + `\t--${Config.sass.varPrefix}${token}: ${flatTokens[token]};\n`
    );
  }, "");
  const cssContent = `${opts.selector} {\n${cssVars}}`;
  const dest = path.join(opts.path, Config.tokenFilenames.css);

  put(dest, cssContent);
};
