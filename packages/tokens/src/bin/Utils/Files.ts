import fs from "fs";
import chalk from "chalk";

export const put = (path: string, content: string) => {
  console.log("Generating tokens file to " + path + " ...");
  const dir = path.substring(0, path.lastIndexOf("/"));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(path, content);
  console.log(
    chalk.bgGreen(chalk.white("File " + path + " generated successfully."))
  );
};
