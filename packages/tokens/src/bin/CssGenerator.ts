import * as fs from "fs/promises";
import * as path from "path";
import Config from "./Config.js";

export const cssGenerator = async (
  tokens: any,
  opts: { path: string; selector: string }
) => {
  const flatTokens = flatify(tokens);
  console.log("flatTokens", flatTokens);
  // Generate CSS too. Temporary.
  const cssVars = Object.keys(flatTokens).reduce((acc, token) => {
    return (
      acc + `\t--${Config.sass.varPrefix}${token}: ${flatTokens[token]};\n`
    );
  }, "");
  const cssContent = `${opts.selector} {\n${cssVars}}`;

  console.log("css", cssContent);
  await fs.writeFile(
    path.join(opts.path, Config.sass.tokenFilenameCss),
    cssContent
  );
};

const flatify = (obj: any) => {
  const flatObj: any = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === "object") {
      const flatChild = flatify(value);
      Object.keys(flatChild).forEach((subKey) => {
        flatObj[key + Config.sass.varSeparator + subKey] = flatChild[subKey];
      });
    } else {
      flatObj[key] = value;
    }
  });
  return flatObj;
};
