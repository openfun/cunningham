import { dirname, sep } from "path";
import { defaultTokenRefs } from "@openfun/cunningham-tokens";
import { globSync } from "glob";

/**
 * This scripts dynamically imports all tokens.ts files from components and load them in a single object that will be
 * exported as the local configuration of cunningham under the `components` key.
 *
 * Hence, any consumers of this package will be able to customize the tokens of the components they use by overriding
 * them in their own local configuration file. ( cunningham.ts|js )
 */
const components: any = {};
const files = globSync("src/components/**/tokens.ts");
files.forEach((file) => {
  const importPath = "." + sep + file.replace(/\.ts$/, "");

  const res = require(importPath);
  if (!res.tokens) {
    throw new Error("Tokens file does not export tokens " + file);
  }

  try {
    const componentName = dirname(importPath)
      .split(`${sep}components${sep}`)[1]
      .toLocaleLowerCase()
      .replace(sep, "-");

    components[componentName] = res.tokens(defaultTokenRefs);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_error) {
    throw new Error("Could not find component name from file path " + file);
  }
});

export default {
  themes: {
    default: {
      components,
    },
  },
};
