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
    expect(fs.readFileSync(tokensFile).toString()).toMatchInlineSnapshot(`
"export const tokens = {"themes":{"default":{"theme":{"colors":{"primary":"#055FD2","secondary":"#DA0000","ternary-900":"#022858","ogre-odor-is-orange-indeed":"#FD5240"},"font":{"sizes":{"m":"1rem"},"weights":{"medium":400},"families":{"base":"Roboto"}},"spacings":{"s":"1rem"},"transitions":{"ease":"linear"},"input":{"border-color":"#022858"}},"components":{"button":{"font-family":"Times New Roman,Helvetica Neue,Segoe UI"}}},"dark":{"theme":{"colors":{"primary":"black"}}},"custom":{"theme":{"colors":{"primary":"green"}}}}};
"
`);
  });
});
