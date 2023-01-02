import * as fs from "fs";
import * as path from "path";
import * as child_process from "child_process";
import { run } from "ThemeGenerator";
import { cleanup } from "tests/Utils";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as util from "util";
import Config from "../Config";

jest.mock("../Paths", () => ({
  workPath: () => __dirname,
}));

jest.mock("../cunningham.dist.js", () => ({
  theme: {
    colors: {
      primary: "#055FD2",
      secondary: "#DA0000",
    },
  },
}));

const runBin = async (args: string) => {
  const exec = util.promisify(child_process.exec);
  const promise = exec(
    path.join(__dirname, "..", "..", "..", "dist", "bin", "Main.js") +
      " " +
      args
  );

  promise.child.stdout?.on("data", (data) => {
    console.log("stdout: " + data);
  });
  promise.child.stderr?.on("data", (data) => {
    console.log("stderr: " + data);
  });
  promise.child.on("close", (code) => {
    console.log("closing code: " + code);
  });

  const { stdout, stderr } = await promise;
  console.log("stdout", stdout);
  console.log("stderr", stderr);
};

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
    const cssTokensFile = path.join(__dirname, Config.tokenFilename + ".css");
    expect(fs.existsSync(cssTokensFile)).toEqual(false);
    await run(["", "", "-g", "css"]);
    expect(fs.existsSync(cssTokensFile)).toEqual(true);
    expect(fs.readFileSync(cssTokensFile).toString()).toEqual(`:root {
\t--c--theme--colors--primary: #055FD2;
\t--c--theme--colors--secondary: #DA0000;
}`);
  });

  it("Runs with existing JS config file using local values.", async () => {
    const localConfigurationFile = path.join(__dirname, "cunningham.js");
    expect(fs.existsSync(localConfigurationFile)).toEqual(false);

    const cssTokensFile = path.join(__dirname, Config.tokenFilename + ".css");
    expect(fs.existsSync(cssTokensFile)).toEqual(false);

    fs.copyFileSync(
      path.join(__dirname, "assets", "cunningham.js"),
      localConfigurationFile
    );
    expect(fs.existsSync(localConfigurationFile)).toEqual(true);

    await run(["", "", "-g", "css"]);
    expect(fs.existsSync(cssTokensFile)).toEqual(true);
    expect(fs.readFileSync(cssTokensFile).toString()).toEqual(`:root {
\t--c--theme--colors--primary: AntiqueWhite;
\t--c--theme--colors--secondary: #DA0000;
}`);
  });

  it("Runs with existing TS config file using local values.", async () => {
    const localConfigurationFile = path.join(__dirname, "cunningham.ts");
    expect(fs.existsSync(localConfigurationFile)).toEqual(false);

    const cssTokensFile = path.join(__dirname, Config.tokenFilename + ".css");
    expect(fs.existsSync(cssTokensFile)).toEqual(false);

    fs.copyFileSync(
      path.join(__dirname, "assets", "cunningham.ts"),
      localConfigurationFile
    );
    expect(fs.existsSync(localConfigurationFile)).toEqual(true);

    // We must run the bin directly to be sure that it compiles the TS file. ( Importing TS from
    // TS will always work )
    await runBin(`-g css -cwd ${__dirname}`);

    // await run(["", "", "-g", "css"]);
    expect(fs.existsSync(cssTokensFile)).toEqual(true);
    expect(fs.readFileSync(cssTokensFile).toString()).toContain(`
\t--c--theme--colors--primary: typescript;`);
  });

  const testOutput = async (opt: string) => {
    const outputDir = path.join(__dirname, "output");
    const cssTokensFile = path.join(outputDir, Config.tokenFilename + ".css");
    expect(fs.existsSync(cssTokensFile)).toEqual(false);
    await run(["", "", "-g", "css", opt, outputDir]);
    expect(fs.existsSync(cssTokensFile)).toEqual(true);
    expect(fs.readFileSync(cssTokensFile).toString()).toEqual(`:root {
\t--c--theme--colors--primary: #055FD2;
\t--c--theme--colors--secondary: #DA0000;
}`);
  };

  it("Runs with -o options.", async () => {
    await testOutput("-o");
  });

  it("Runs with --output options.", async () => {
    await testOutput("--output");
  });
});
