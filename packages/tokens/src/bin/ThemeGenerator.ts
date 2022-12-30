import { program } from "commander";
import chalk from "chalk";
import figlet from "figlet";
import { cssGenerator } from "Generators/CssGenerator";
import { getConfig } from "ConfigLoader";
import { tokensGenerator } from "TokensGenerator";
import { workPath } from "Paths";

export const buildTheme = async () => {
  const options = program.opts();
  const config = await getConfig();
  const tokens = tokensGenerator(config);
  await cssGenerator(tokens, {
    path: options.output,
    selector: options.selector,
  });
};

export const run = async (args: string[]) => {
  console.log(
    chalk.red(figlet.textSync("Cunningham", { horizontalLayout: "full" }))
  );

  program
    .description("Cunningham's CLI tool.")
    .option(
      "-o, --output <directory>",
      "Specify the output dir of generated files.",
      workPath()
    )
    .option(
      "-s, --selector <selector>",
      "Specify the css root selector element.",
      ":root"
    )
    .parse(args);

  await buildTheme();
};
