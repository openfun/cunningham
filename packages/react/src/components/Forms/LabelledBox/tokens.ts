import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "label-color--small": defaults.contextuals.content.neutral.tertiary,
  "label-color--big": defaults.contextuals.content.neutral.primary,
  "label-color--small--disabled":
    defaults.contextuals.content.neutral.secondary,
  "label-color--big--disabled": defaults.contextuals.content.neutral.secondary,
});
