import path from "path";
import deepmerge from "deepmerge";
import Config from "./Config.js";

/**
 * TODO: Allow un-existant local config file ( but warn the user ! )
 */
const getLocalConfig = async () => {
  const configPath = path.join(process.cwd(), Config.configurationFilename);
  console.log("configPath", configPath);
  const config = await import(configPath);
  return config.default;
};

const getDistConfig = async () => {
  const config = await import("./cunningham.dist.js");
  return config.default;
};

export const getConfig = async () => {
  const localConfig = await getLocalConfig();
  console.log("localConfig", localConfig);
  const distConfig = await getDistConfig();
  console.log("distConfig", distConfig);
  const config = deepmerge(distConfig, localConfig);
  console.log("config", config);
  return config;
};
