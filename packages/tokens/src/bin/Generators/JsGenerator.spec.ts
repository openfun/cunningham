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
    const tokensFile = path.join(__dirname, Config.tokenFilename + ".js");
    expect(fs.existsSync(tokensFile)).toEqual(false);
    await run(["", "", "-g", "js"]);
    expect(fs.existsSync(tokensFile)).toEqual(true);
    // Verify file content exists and contains expected structure
    const content = fs.readFileSync(tokensFile).toString();
    expect(content).toBeTruthy();
    expect(content.length).toBeGreaterThan(0);
    expect(content).toContain("export const tokens = {");
    expect(content).toContain("themes");
    expect(content).toContain("default");
    expect(content).toContain("dark");
    expect(content).toContain("custom");
  });
});
