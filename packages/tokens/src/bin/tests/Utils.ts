import path from "path";
import fs from "fs";
import Config from "Config";
import { Generators } from "Generators";

/**
 * Empty the current directory from generated tokens file and local
 * config to start with an predictable environment.
 */
export const cleanup = (dir: string) => {
  const tokenFilenames = Object.keys(Generators).map(
    (extension) => Config.tokenFilename + "." + extension,
  );

  tokenFilenames.forEach((filename) => {
    const filePath = path.join(dir, filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });

  Config.configurationFilenames.forEach((filename) => {
    const localConfigurationFile = path.join(dir, filename);
    if (fs.existsSync(localConfigurationFile)) {
      fs.unlinkSync(localConfigurationFile);
    }
  });

  const outputPath = path.join(dir, "output");
  if (fs.existsSync(outputPath)) {
    fs.rmSync(outputPath, { recursive: true });
  }
};
