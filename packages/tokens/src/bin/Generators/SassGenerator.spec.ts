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
    jest.spyOn(console, "log").mockImplementation(() => {});
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
    expect(fs.readFileSync(sassFile).toString()).toMatchInlineSnapshot(`
      "$theme: (
        'colors': (
          'primary': #055FD2,
          'secondary': #DA0000,
          'ternary-900': #022858,
          'ogre-odor-is-orange-indeed': #FD5240
        ),
        'font': (
          'sizes': (
            'm': 1rem
          ),
          'weights': (
            'medium': 400
          ),
          'families': (
            'base': Roboto
          )
        ),
        'spacings': (
          's': 1rem
        ),
        'transitions': (
          'ease': linear
        ),
        'input': (
          'border-color': #022858
        )
      ) !default
      "
    `);
  });
});
