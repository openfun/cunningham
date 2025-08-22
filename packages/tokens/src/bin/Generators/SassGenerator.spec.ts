import path from "path";
import fs from "fs";
import Config from "Config";
import { run } from "ThemeGenerator";
import { cleanup } from "tests/Utils";

jest.mock("../Paths", () => ({
  workPath: () => __dirname,
}));

describe("SassGenerator", () => {
  beforeAll(() => {
    // jest.spyOn(console, "log").mockImplementation(() => {});
    cleanup(__dirname);
  });

  afterEach(() => {
    cleanup(__dirname);
  });

  it("generates valid Sass file", async () => {
    const sassFile = path.join(__dirname, Config.tokenFilename + ".scss");
    expect(fs.existsSync(sassFile)).toEqual(false);
    await run(["", "", "-g", "scss"]);

    expect(fs.existsSync(sassFile)).toEqual(true);
    // Verify file content exists and contains expected structure
    const content = fs.readFileSync(sassFile).toString();
    expect(content).toBeTruthy();
    expect(content.length).toBeGreaterThan(0);
    expect(content).toContain("$themes:");
    expect(content).toContain("default");
    expect(content).toContain("dark");
    expect(content).toContain("custom");
    expect(content).toContain("primary");
    expect(content).toContain("secondary");
  });
});
