import * as path from "path";
import * as fs from "fs";
import chalk from "chalk";
import Config from "./Config";
import { flatify } from "./Utils/Flatify";

export const cssGenerator = async (
  tokens: any,
  opts: { path: string; selector: string }
) => {
  const flatTokens = flatify(tokens, Config.sass.varSeparator);
  const cssVars = Object.keys(flatTokens).reduce((acc, token) => {
    return (
      acc + `\t--${Config.sass.varPrefix}${token}: ${flatTokens[token]};\n`
    );
  }, "");
  const cssContent = `${opts.selector} {\n${cssVars}}`;

  const dest = path.join(opts.path, Config.sass.tokenFilenameCss);
  console.log("Generating tokens file to " + dest + " ...");
  if (!fs.existsSync(opts.path)) {
    fs.mkdirSync(opts.path);
  }
  fs.writeFileSync(dest, cssContent);
  console.log(chalk.bgGreen(chalk.white("File generated successfully.")));
};
