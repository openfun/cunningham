import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "border-radius": "5px",
    shadow: "0px 0px 10px 1px " + defaults.theme.colors.primary + ";",
  };
};
