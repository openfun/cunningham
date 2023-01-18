import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "border-radius": "2px",
    height: "48px",
    "font-size": defaults.theme.typo.sizes.l,
    "font-weight": defaults.theme.typo.weights.medium,
  };
};
