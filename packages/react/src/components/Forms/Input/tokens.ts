import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "font-weight": defaults.theme.font.weights.medium,
  "font-size": defaults.theme.font.sizes.l,
  "border-radius": "8px",
  "border-radius--hover": "2px",
  "border-radius--focus": "2px",
  "border-width": "2px",
  "border-color": defaults.theme.colors["greyscale-300"],
  "border-color--hover": defaults.theme.colors["greyscale-500"],
  "border-color--focus": defaults.theme.colors["primary-600"],
  "border-style": "solid",
  color: defaults.theme.colors["greyscale-800"],
  "label-color--focus": defaults.theme.colors["primary-600"],
});
