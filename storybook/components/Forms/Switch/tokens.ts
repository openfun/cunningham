import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "accent-color": defaults.theme.colors["success-700"],
  "rail-background-color": defaults.theme.colors["greyscale-500"],
  "rail-background-color--disabled": defaults.theme.colors["greyscale-400"],
  "rail-border-radius": "50vw",
  "handle-background-color": "white",
  "handle-background-color--disabled": defaults.theme.colors["greyscale-200"],
  "handle-border-radius": "50%",
});
