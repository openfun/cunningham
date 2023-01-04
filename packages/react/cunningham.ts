import { glob } from "glob";
import { defaultTokens } from "@openfun/cunningham-tokens";

/**
 * This scripts dynamically imports all tokens.ts files from components and load them in a single object that will be
 * exported as the local configuration of cunningham under the `components` key.
 *
 * Hence, any consumers of this package will be able to customize the tokens of the components they use by overriding
 * them in their own local configuration file. ( cunningham.ts|js )
 */
const components: any = {};
const files = glob.sync("src/components/**/tokens.ts");
files.forEach((file) => {
  const importPath = "./" + file.replace(/\.ts$/, "");
  const matches = /^.+components\/(.+)\/tokens$/gm.exec(importPath);
  let componentName = matches && matches[1];
  if (!componentName) {
    throw new Error("Could not find component name from file path " + file);
  }
  componentName = componentName.toLowerCase();

  const res = require(importPath);
  if (!res.tokens) {
    throw new Error("Tokens file does not export tokens " + file);
  }

  components[componentName] = res.tokens(defaultTokens);
});

export default {
  components,
};
