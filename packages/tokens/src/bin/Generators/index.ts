import { cssGenerator } from "Generators/CssGenerator";
import { jsGenerator } from "Generators/JsGenerator";
import { Tokens } from "TokensGenerator";

export type Generator = (
  tokens: Tokens,
  opts: { path: string; selector: string }
) => Promise<void>;

export const Generators: Record<string, Generator> = {
  css: cssGenerator,
  js: jsGenerator,
};
