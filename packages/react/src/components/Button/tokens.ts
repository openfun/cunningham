import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "border-radius": "8px",
    "border-radius--active": "2px",
    "border-radius--focus": "8px",
    "medium-text-height": "36px",
    "medium-height": "48px",
    "small-height": "32px",
    "nano-height": "24px",
    "medium-font-size": defaults.theme.font.sizes.l,
    "medium-icon-font-size": "1.5rem",
    "small-font-size": defaults.theme.font.sizes.m,
    "small-icon-font-size": defaults.theme.font.sizes.l,
    "nano-font-size": defaults.theme.font.sizes.m,
    "nano-icon-font-size": defaults.theme.font.sizes.l,
    "font-weight": defaults.theme.font.weights.regular,
    "font-family": defaults.theme.font.families.base,
    "text-font-weight": defaults.theme.font.weights.medium,
  };
};
