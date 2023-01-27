import { DefaultTokens } from "cunningham-tokens-test";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "border-radius": "2px",
    height: "48px",
    "font-size": defaults.theme.font.sizes.l,
    "font-weight": defaults.theme.font.weights.medium,
  };
};
