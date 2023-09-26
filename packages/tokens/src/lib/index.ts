import { tokens } from "./cunningham-tokens";

export type Configuration = typeof tokens;
export type DefaultTokens = (typeof tokens)["themes"]["default"];
export const defaultTokens = tokens.themes.default;

/**
 * Transform such object:
 * {
 *     theme: {
 *         colors: {
 *            "primary-500": "blue"
 *         }
 *     }
 * }
 *
 * to:
 * {
 *     theme: {
 *         colors: {
 *             "primary-500": "ref(theme.colors.primary-500)"
 *         }
 *     }
 * }
 * @param tokens_
 */
export const buildRefs = <T extends Object>(tokens_: T): T => {
  const buildRefsAux = (upperKey: string, subTokens: any) => {
    if (typeof subTokens === "object") {
      const obj: any = {};
      Object.entries(subTokens).forEach(([key, value]) => {
        obj[key] = buildRefsAux((upperKey ? upperKey + "." : "") + key, value);
      });
      return obj;
    }
    return "ref(" + upperKey + ")";
  };
  return buildRefsAux("", tokens_);
};

export const defaultTokenRefs = buildRefs(defaultTokens);
