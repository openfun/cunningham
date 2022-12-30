import path from "path";
import fs from "fs";
import Config from "Config";
import { run } from "ThemeGenerator";
import { cleanup } from "tests/Utils";

jest.mock("../Paths", () => ({
  workPath: () => __dirname,
}));

describe("JsGenerator", () => {
  beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    cleanup(__dirname);
  });

  afterEach(() => {
    cleanup(__dirname);
  });

  it("generates valid JS file.", async () => {
    const tokensFile = path.join(__dirname, Config.tokenFilenames.js);
    expect(fs.existsSync(tokensFile)).toEqual(false);
    await run(["", "", "-g", "js"]);
    expect(fs.existsSync(tokensFile)).toEqual(true);
    expect(fs.readFileSync(tokensFile).toString()).toEqual(
      `export const tokens = {"colors":{"primary":"#055FD2","secondary":"#DA0000"}};`
    );
  });
});
