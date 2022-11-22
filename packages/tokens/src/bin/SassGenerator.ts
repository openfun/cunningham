import * as fs from "fs/promises";
import * as path from "path";
import Config from "./Config.js";

export const sassGenerator = async (tokens: any, opts: { path: string }) => {
  const flatTokens = flatify(tokens);
  console.log("flatTokens", flatTokens);
  const content = Object.keys(flatTokens).reduce((acc, token) => {
    return acc + `\n$${Config.sass.varPrefix}${token}: ${flatTokens[token]};`;
  }, "");
  console.log("content", content);
  await fs.writeFile(path.join(opts.path, Config.sass.tokenFilename), content);
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
