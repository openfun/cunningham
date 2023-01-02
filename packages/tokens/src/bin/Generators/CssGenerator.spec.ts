import path from "path";
import fs from "fs";
import Config from "Config";
import { run } from "ThemeGenerator";
import { cleanup } from "tests/Utils";

jest.mock("../Paths", () => ({
  workPath: () => __dirname,
}));

describe("CssGenerator", () => {
  beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    cleanup(__dirname);
  });

  afterEach(() => {
    cleanup(__dirname);
  });

  const testSelector = async (opt: string) => {
    const cssTokensFile = path.join(__dirname, Config.tokenFilename + ".css");
    expect(fs.existsSync(cssTokensFile)).toEqual(false);
    await run(["", "", "-g", "css", opt, "html"]);
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
