import child_process from "child_process";
import path from "path";

/**
 * Run the NPM script 'build-theme' in order to generate the tokens files ( cunningham-token.ts|css ).
 * ( The purpose is mainly to generate the tokens files and then verify in tests that custom tokens defined in
 * tokens.ts files are correctly taken into account. )
 */
export const buildTheme = (debug?: boolean) => {
  const child = child_process.exec(
    "cd " + path.join(__dirname, "..", "..") + " && yarn build-theme"
  );
  return new Promise<void>((resolve) => {
    child.stdout?.on("data", (data) => {
      // eslint-disable-next-line no-console
      if (debug) console.log("stdout: " + data);
    });
    child.stderr?.on("data", (data) => {
      // eslint-disable-next-line no-console
      if (debug) console.log("stderr: " + data);
    });
    child.on("close", (code) => {
      // eslint-disable-next-line no-console
      if (debug) console.log("closing code: " + code);
      resolve();
    });
  });
};

export const loadTokens = async () => {
  const module = await import("../cunningham-tokens");
  return module.tokens;
};
