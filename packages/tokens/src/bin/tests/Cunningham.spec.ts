import * as fs from "fs";
import * as path from "path";
import { run } from "../ThemeGenerator";
import Config from "../Config";

jest.mock("../Paths", () => ({
  workPath: () => __dirname,
}));

/**
 * Empty the current directory from generated tokens file and local
 * config to start with an predictable environment.
 */
const cleanup = () => {
  const filePath = path.join(__dirname, Config.sass.tokenFilenameCss);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  const localConfigurationFile = path.join(
    __dirname,
    Config.configurationFilenames[0]
  );
  if (fs.existsSync(localConfigurationFile)) {
    fs.unlinkSync(localConfigurationFile);
  }

  const outputPath = path.join(__dirname, "output");
  if (fs.existsSync(outputPath)) {
    fs.rmSync(outputPath, { recursive: true });
  }
};

describe("Cunningham Bin", () => {
  beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  it("Runs without existing config file with default values.", async () => {
    const cssTokensFile = path.join(__dirname, Config.sass.tokenFilenameCss);
    expect(fs.existsSync(cssTokensFile)).toEqual(false);
    await run([]);
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

    const cssTokensFile = path.join(__dirname, Config.sass.tokenFilenameCss);
    expect(fs.existsSync(cssTokensFile)).toEqual(false);

    fs.copyFileSync(
      path.join(__dirname, "assets", Config.configurationFilenames[0]),
      localConfigurationFile
    );
    expect(fs.existsSync(localConfigurationFile)).toEqual(true);

    await run([]);
    expect(fs.existsSync(cssTokensFile)).toEqual(true);
    expect(fs.readFileSync(cssTokensFile).toString()).toEqual(`:root {
\t--c--colors--primary: AntiqueWhite;
\t--c--colors--secondary: #DA0000;
}`);
  });

  const testOutput = async (opt: string) => {
    const outputDir = path.join(__dirname, "output");
    const cssTokensFile = path.join(outputDir, Config.sass.tokenFilenameCss);
    expect(fs.existsSync(cssTokensFile)).toEqual(false);
    await run(["", "", opt, outputDir]);
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

  const testSelector = async (opt: string) => {
    const cssTokensFile = path.join(__dirname, Config.sass.tokenFilenameCss);
    expect(fs.existsSync(cssTokensFile)).toEqual(false);
    await run(["", "", opt, "html"]);
    expect(fs.existsSync(cssTokensFile)).toEqual(true);
    expect(fs.readFileSync(cssTokensFile).toString()).toEqual(`html {
\t--c--colors--primary: #055FD2;
\t--c--colors--secondary: #DA0000;
}`);
  };

  it("Runs with -s options.", async () => {
    await testSelector("-s");
  });
  it("Runs with --selector options.", async () => {
    await testSelector("--selector");
  });
});
