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
    expect(fs.readFileSync(cssTokensFile).toString()).toEqual(
      fs
        .readFileSync(
          path.join(
            __dirname,
            "..",
            "tests",
            "assets",
            "expected-default-" + Config.tokenFilename + ".css"
          )
        )
        .toString()
        .replace(":root", "html")
    );
  };

  it("Runs with -s options.", async () => {
    await testSelector("-s");
  });
  it("Runs with --selector options.", async () => {
    await testSelector("--selector");
  });
  it("Runs with  --utility-classes options.", async () => {
    const cssTokensFile = path.join(__dirname, Config.tokenFilename + ".css");
    expect(fs.existsSync(cssTokensFile)).toEqual(false);
    await run(["", "", "-g", "css", "-s", "html", "--utility-classes"]);
    expect(fs.existsSync(cssTokensFile)).toEqual(true);
    expect(fs.readFileSync(cssTokensFile).toString()).toEqual(
      fs
        .readFileSync(
          path.join(
            __dirname,
            "..",
            "tests",
            "assets",
            "expected-with-utility-classes-" + Config.tokenFilename + ".css"
          )
        )
        .toString()
        .replace(":root", "html")
    );
  });
});
