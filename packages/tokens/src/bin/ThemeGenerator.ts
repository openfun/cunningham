import { program } from "commander";
import chalk from "chalk";
import figlet from "figlet";
import { getConfig } from "ConfigLoader";
import { tokensGenerator } from "TokensGenerator";
import { workPath } from "Paths";
import { Generators } from "Generators";

export const buildTheme = async () => {
  const options = program.opts();
  const config = await getConfig();
  const tokens = tokensGenerator(config);
  const { generators } = options;
  await Promise.allSettled(
    generators.map((generator: string) => {
      if (!Generators[generator]) {
        throw new Error('The generator "' + generator + '" does not exist.');
      }
      return Generators[generator](tokens, {
        path: options.output,
        selector: options.selector,
      });
    })
  );
};

export const run = async (args: string[]) => {
  console.log(
    chalk.red(figlet.textSync("Cunningham", { horizontalLayout: "full" }))
  );

  const commaSeparatedList = (value: string) => {
    return value.split(",");
  };

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
    .requiredOption(
      "-g, --generators <generators>",
      "Specify the generators to use.",
      commaSeparatedList
    )
    .parse(args);

  await buildTheme();
};
