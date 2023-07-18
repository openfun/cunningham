import { cssGenerator } from "Generators/CssGenerator";
import { sassGenerator } from "Generators/SassGenerator";
import { jsGenerator } from "Generators/JsGenerator";
import { Tokens } from "TokensGenerator";
import { tsGenerator } from "Generators/TsGenerator";
import { resolve } from "Utils/resolve";

export type Generator = (
  tokens: Tokens,
  opts: { path: string; selector: string; utilityClasses?: boolean },
) => Promise<void>;

export const Generators: Record<string, Generator> = {
  scss: sassGenerator,
  css: cssGenerator,
  js: jsGenerator,
  ts: tsGenerator,
};

export const resolveRefs = (
  tokens: Tokens,
  callback: (ref: string, tokens: Tokens) => string,
): Tokens => {
  let refsCount = 0;
  let resolved = tokens;

  // Each time we encounter a leaf with a value matching ref(...) we replacing it with the return value of callback(..).
  const resolveRefsAux = (toResolve_: any) => {
    if (typeof toResolve_ !== "object") {
      const matches = /^ref\((.+)\)$/gm.exec(toResolve_);
      if (!matches) {
        return toResolve_;
      }
      refsCount++;
      return callback(matches[1], resolved);
    }
    const resolvedSub: any = {};
    Object.entries(toResolve_).forEach(([key, value]) => {
      resolvedSub[key] = resolveRefsAux(value);
    });
    return resolvedSub;
  };

  // We need to resolveRefsAux until there is not refs found. In most cases there will be only two iterations
  // ( one for resolving actual ref() and one another to make sure there were 0 ref() left ).
  // But in some cases resolved ref() could result in a new ref(), so in the following example we will
  // have three iterations:
  //
  // tokens:
  // A = "foo"
  // B = ref(A)
  // C = ref(B)
  //
  // A = "foo"
  // B = "foo"
  // C = ref(A)
  // it = 1
  //
  // A = "foo"
  // B = "foo"
  // C = "foo"
  // it = 2
  //
  // A = "foo"
  // B = "foo"
  // C = "foo"
  // it = 3
  const maxIterations = 10;
  let iterations = 0;
  // eslint-disable-next-line no-constant-condition
  do {
    // Prevent infinite loops.
    if (iterations >= maxIterations) {
      throw new Error(
        "Maximum resolveRefs iterations: please reduce usage of chained references.",
      );
    }
    refsCount = 0;
    resolved = resolveRefsAux(resolved);
    iterations++;
  } while (refsCount > 0);

  return resolved;
};

/**
 * This function is meant to be given as callback to resolveRefs.
 *
 * It simply retrieves the actual value of "ref" ( dot notation like "theme.colors.primary-500" ) inside
 * the resolvingTokens nested object.
 * @param ref
 * @param resolvingTokens
 */
export const resolveRefValue = (ref: string, resolvingTokens: Tokens) => {
  return resolve(resolvingTokens, ref);
};
