#!/usr/bin/env node
import chalk from "chalk";
import figlet from "figlet";

console.log(
  chalk.red(figlet.textSync("Cunningham ._.", { horizontalLayout: "full" }))
);

export {};
