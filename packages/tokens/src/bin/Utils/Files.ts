import fs from "fs";
import pathHelper from "path";
import chalk from "chalk";

export const put = (path: string, content: string) => {
  console.log("Generating tokens file to " + path + " ...");
  const dir = pathHelper.dirname(path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // Add a new line at the end of the file
  content += "\n";

  fs.writeFileSync(path, content);
  console.log(
    chalk.bgGreen(chalk.white("File " + path + " generated successfully.")),
  );
};
