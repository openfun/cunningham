import { cssGenerator } from "Generators/CssGenerator";
import { jsGenerator } from "Generators/JsGenerator";
import { Tokens } from "TokensGenerator";
import { tsGenerator } from "Generators/TsGenerator";

export type Generator = (
  tokens: Tokens,
  opts: { path: string; selector: string; utilityClasses?: boolean }
) => Promise<void>;

export const Generators: Record<string, Generator> = {
  css: cssGenerator,
  js: jsGenerator,
  ts: tsGenerator,
};
