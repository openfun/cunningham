import { program } from "commander";
import chalk from "chalk";
import figlet from "figlet";
import { getConfig } from "./ConfigLoader.js";
import { tokensGenerator } from "./TokensGenerator.js";
import { cssGenerator } from "./CssGenerator.js";

export const buildTheme = async () => {
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

export const run = async () => {
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
    .option(
      "-s, --selector <selector>",
      "Specify the css root selector element.",
      ":root"
    )
    .parse(process.argv);

  await buildTheme();
};
