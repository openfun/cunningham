import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "font-size": defaults.theme.font.sizes.m,
  "font-weight": defaults.theme.font.weights.medium,
  color: defaults.theme.colors["greyscale-900"],
  "border-color": defaults.theme.colors["greyscale-300"],
  "border-radius": "2px",
  "accent-color": defaults.theme.colors["success-700"],
  size: "1.5rem",
});
