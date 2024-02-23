import path from "path";
import fs from "fs";
import Config from "Config";
import { run } from "ThemeGenerator";
import { cleanup } from "tests/Utils";

jest.mock("../Paths", () => ({
  workPath: () => __dirname,
}));

describe("CssGenerator", () => {
  beforeEach(() => {
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
    expect(fs.readFileSync(cssTokensFile).toString()).toMatchInlineSnapshot(`
"html {
	--c--theme--colors--primary: #055FD2;
	--c--theme--colors--secondary: #DA0000;
	--c--theme--colors--ternary-900: #022858;
	--c--theme--colors--ogre-odor-is-orange-indeed: #FD5240;
	--c--theme--font--sizes--m: 1rem;
	--c--theme--font--weights--medium: 400;
	--c--theme--font--families--base: Roboto;
	--c--theme--spacings--s: 1rem;
	--c--theme--transitions--ease: linear;
	--c--theme--input--border-color: var(--c--theme--colors--ternary-900);
	--c--components--button--font-family: Times New Roman,Helvetica Neue,Segoe UI;
}
.cunningham-theme--dark{
	--c--theme--colors--primary: black;
}
.cunningham-theme--custom{
	--c--theme--colors--primary: green;
}
"
`);
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
    expect(fs.readFileSync(cssTokensFile).toString()).toMatchInlineSnapshot(`
"html {
	--c--theme--colors--primary: #055FD2;
	--c--theme--colors--secondary: #DA0000;
	--c--theme--colors--ternary-900: #022858;
	--c--theme--colors--ogre-odor-is-orange-indeed: #FD5240;
	--c--theme--font--sizes--m: 1rem;
	--c--theme--font--weights--medium: 400;
	--c--theme--font--families--base: Roboto;
	--c--theme--spacings--s: 1rem;
	--c--theme--transitions--ease: linear;
	--c--theme--input--border-color: var(--c--theme--colors--ternary-900);
	--c--components--button--font-family: Times New Roman,Helvetica Neue,Segoe UI;
}
.cunningham-theme--dark{
	--c--theme--colors--primary: black;
}
.cunningham-theme--custom{
	--c--theme--colors--primary: green;
} .clr-primary { color: var(--c--theme--colors--primary); }
.clr-secondary { color: var(--c--theme--colors--secondary); }
.clr-ternary-900 { color: var(--c--theme--colors--ternary-900); }
.clr-ogre-odor-is-orange-indeed { color: var(--c--theme--colors--ogre-odor-is-orange-indeed); }
.bg-primary { background-color: var(--c--theme--colors--primary); }
.bg-secondary { background-color: var(--c--theme--colors--secondary); }
.bg-ternary-900 { background-color: var(--c--theme--colors--ternary-900); }
.bg-ogre-odor-is-orange-indeed { background-color: var(--c--theme--colors--ogre-odor-is-orange-indeed); }
.fw-medium { font-weight: var(--c--theme--font--weights--medium); }
.fs-m { 
        font-size: var(--c--theme--font--sizes--m); 
        letter-spacing: var(--c--theme--font--letterspacings--m); 
      }
.f-base { font-family: var(--c--theme--font--families--base); }
.m-s { margin: var(--c--theme--spacings--s); }.mb-s { margin-bottom: var(--c--theme--spacings--s); }.mt-s { margin-top: var(--c--theme--spacings--s); }.ml-s { margin-left: var(--c--theme--spacings--s); }.mr-s { margin-right: var(--c--theme--spacings--s); }
.p-s { padding: var(--c--theme--spacings--s); }.pb-s { padding-bottom: var(--c--theme--spacings--s); }.pt-s { padding-top: var(--c--theme--spacings--s); }.pl-s { padding-left: var(--c--theme--spacings--s); }.pr-s { padding-right: var(--c--theme--spacings--s); }
"
`);
  });
});
