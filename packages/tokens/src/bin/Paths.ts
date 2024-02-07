import { ThemeGeneratorProgram } from "ThemeGenerator";

export const workPath = () => {
  return ThemeGeneratorProgram.instance.opts().workingDir ?? process.cwd();
};
