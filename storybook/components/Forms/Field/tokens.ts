import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  width: "292px",
  "font-size": defaults.theme.font.sizes.s,
  color: defaults.theme.colors["greyscale-600"],
});
