import { program } from "commander";

export const workPath = () => {
  return program.opts().workingDir ?? process.cwd();
};
