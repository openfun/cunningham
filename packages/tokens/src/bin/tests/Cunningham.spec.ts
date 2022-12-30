import * as fs from "fs";
import * as path from "path";
import { run } from "ThemeGenerator";
import { cleanup } from "tests/Utils";
import Config from "../Config";

jest.mock("../Paths", () => ({
  workPath: () => __dirname,
}));

/**
 * Test written here are supposed to be general ones and not specific to any generator.
 *
 * But as we need at least one generator to execute the bin we need to choose one to use by default,
 * that's why we use the css generator.
 */
describe("Cunningham Bin", () => {
  beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    cleanup(__dirname);
  });

  afterEach(() => {
    cleanup(__dirname);
  });

  it("Runs without existing config file with default values.", async () => {
    const cssTokensFile = path.join(__dirname, Config.tokenFilenames.css);
    expect(fs.existsSync(cssTokensFile)).toEqual(false);
    await run(["", "", "-g", "css"]);
    expect(fs.existsSync(cssTokensFile)).toEqual(true);
    expect(fs.readFileSync(cssTokensFile).toString()).toEqual(`:root {
\t--c--colors--primary: #055FD2;
\t--c--colors--secondary: #DA0000;
}`);
  });

  it("Runs with existing config file using local values.", async () => {
    const localConfigurationFile = path.join(
      __dirname,
      Config.configurationFilenames[0]
    );
    expect(fs.existsSync(localConfigurationFile)).toEqual(false);

    const cssTokensFile = path.join(__dirname, Config.tokenFilenames.css);
    expect(fs.existsSync(cssTokensFile)).toEqual(false);

    fs.copyFileSync(
      path.join(__dirname, "assets", Config.configurationFilenames[0]),
      localConfigurationFile
    );
    expect(fs.existsSync(localConfigurationFile)).toEqual(true);

    await run(["", "", "-g", "css"]);
    expect(fs.existsSync(cssTokensFile)).toEqual(true);
    expect(fs.readFileSync(cssTokensFile).toString()).toEqual(`:root {
\t--c--colors--primary: AntiqueWhite;
\t--c--colors--secondary: #DA0000;
}`);
  });

  const testOutput = async (opt: string) => {
    const outputDir = path.join(__dirname, "output");
    const cssTokensFile = path.join(outputDir, Config.tokenFilenames.css);
    expect(fs.existsSync(cssTokensFile)).toEqual(false);
    await run(["", "", "-g", "css", opt, outputDir]);
    expect(fs.existsSync(cssTokensFile)).toEqual(true);
    expect(fs.readFileSync(cssTokensFile).toString()).toEqual(`:root {
\t--c--colors--primary: #055FD2;
\t--c--colors--secondary: #DA0000;
}`);
  };

  it("Runs with -o options.", async () => {
    await testOutput("-o");
  });

  it("Runs with --output options.", async () => {
    await testOutput("--output");
  });
});
