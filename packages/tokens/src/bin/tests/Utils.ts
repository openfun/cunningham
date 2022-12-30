import path from "path";
import fs from "fs";
import Config from "Config";

/**
 * Empty the current directory from generated tokens file and local
 * config to start with an predictable environment.
 */
export const cleanup = (dir: string) => {
  Object.entries(Config.tokenFilenames).forEach(([key, filename]) => {
    const filePath = path.join(dir, filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });

  const localConfigurationFile = path.join(
    dir,
    Config.configurationFilenames[0]
  );
  if (fs.existsSync(localConfigurationFile)) {
    fs.unlinkSync(localConfigurationFile);
  }

  const outputPath = path.join(dir, "output");
  if (fs.existsSync(outputPath)) {
    fs.rmSync(outputPath, { recursive: true });
  }
};
