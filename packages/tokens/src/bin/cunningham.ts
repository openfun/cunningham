#!/usr/bin/env node
import chalk from "chalk";
import figlet from "figlet";
import { program } from "commander";
import { getConfig } from "./ConfigLoader.js";
import { tokensGenerator } from "./TokensGenerator.js";
import { myFunction } from "./LocalModule.js";
import { cssGenerator } from "./CssGenerator.js";

console.log(
  chalk.red(figlet.textSync("Cunningham", { horizontalLayout: "full" }))
);

myFunction();

program
  .description("Cunningham's CLI tool.")
  .option(
    "-o, --output <directory>",
    "Specify the output dir of generated files.",
    "."
  )
  .option(
    "-s, --selector <selector>",
    "Specify the css root selector element.",
    ":root"
  )
  .parse(process.argv);

const buildTheme = async () => {
  const config = await getConfig();
  const tokens = tokensGenerator(config);
  console.log("tokens", tokens);
  const options = program.opts();
  console.log(options);
  await cssGenerator(tokens, {
    path: options.output,
    selector: options.selector,
  });
};

buildTheme().then(() => {});
