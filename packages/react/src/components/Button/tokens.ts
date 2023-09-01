import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "border-radius": "8px",
    "border-radius--active": "2px",
    "border-radius--focus": "8px",
    "medium-height": "48px",
    "small-height": "32px",
    "medium-font-size": defaults.theme.font.sizes.l,
    "small-font-size": defaults.theme.font.sizes.m,
    "font-weight": defaults.theme.font.weights.regular,
    "font-family": defaults.theme.font.families.base,
  };
};
