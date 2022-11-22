#!/usr/bin/env node

import { fileURLToPath } from "url";
import { dirname } from "path";
import chalk from "chalk";
import figlet from "figlet";

const CONFIGURATION_FILE = "cunningham.js";

const getLocalConfig = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  console.log(__filename, __dirname);

  return {};
};

const buildTheme = async () => {
  const localConfig = await getLocalConfig();
  console.log("localConfig", localConfig);
};

console.log(
  chalk.red(figlet.textSync("Cunningham :o", { horizontalLayout: "full" }))
);

buildTheme().then(() => {
  console.log("Done.");
});

export {};
