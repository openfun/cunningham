import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "font-weight": defaults.theme.font.weights.regular,
  "font-size": defaults.theme.font.sizes.l,
  "border-radius": "8px",
  "border-radius--hover": "2px",
  "border-radius--focus": "2px",
  "border-width": "1px",
  "border-color": defaults.theme.colors["greyscale-300"],
  "border-color--hover": defaults.theme.colors["greyscale-500"],
  "border-color--focus": defaults.theme.colors["primary-600"],
  "border-style": "solid",
  "label-color--focus": defaults.theme.colors["primary-600"],
  "background-color": defaults.theme.colors["greyscale-000"],
  "value-color": defaults.theme.colors["greyscale-900"],
  "value-color--disabled": defaults.theme.colors["greyscale-800"],
});
