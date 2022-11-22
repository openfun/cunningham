#!/usr/bin/env node
import chalk from "chalk";
import figlet from "figlet";
import { program } from "commander";
import { getConfig } from "./ConfigLoader.js";
import { sassGenerator } from "./SassGenerator.js";
import { tokensGenerator } from "./TokensGenerator.js";

console.log(
  chalk.red(figlet.textSync("Cunningham", { horizontalLayout: "full" }))
);

program
  .description("Cunningham's CLI tool.")
  .option(
    "-o, --output <directory>",
    "Specify the output dir of generated files.",
    "."
  )
  .parse(process.argv);

const buildTheme = async () => {
  const config = await getConfig();
  const tokens = tokensGenerator(config);
  console.log("tokens", tokens);
  const options = program.opts();
  await sassGenerator(tokens, {
    path: options.output,
  });
};

buildTheme().then(() => {});

export {};
