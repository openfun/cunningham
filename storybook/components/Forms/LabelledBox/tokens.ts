import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "label-color--small": defaults.theme.colors["greyscale-600"],
  "label-color--big": defaults.theme.colors["greyscale-900"],
  "label-color--small--disabled": defaults.theme.colors["greyscale-600"],
  "label-color--big--disabled": defaults.theme.colors["greyscale-600"],
});
