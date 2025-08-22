import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  width: "292px",
  "font-size": defaults.globals.font.sizes.s,
  color: defaults.contextuals.content.neutral.tertiary,
  "color--error": defaults.contextuals.content.error.tertiary,
  "color--success": defaults.contextuals.content.success.tertiary,
});
