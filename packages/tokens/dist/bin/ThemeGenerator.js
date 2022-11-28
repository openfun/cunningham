"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.buildTheme = void 0;
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const ConfigLoader_1 = require("./ConfigLoader");
const TokensGenerator_1 = require("./TokensGenerator");
const CssGenerator_1 = require("./CssGenerator");
const buildTheme = async () => {
    const config = await (0, ConfigLoader_1.getConfig)();
    const tokens = (0, TokensGenerator_1.tokensGenerator)(config);
    console.log("tokens", tokens);
    const options = commander_1.program.opts();
    console.log(options);
    await (0, CssGenerator_1.cssGenerator)(tokens, {
        path: options.output,
        selector: options.selector,
    });
};
exports.buildTheme = buildTheme;
const run = async () => {
    console.log(chalk_1.default.red(figlet_1.default.textSync("Cunningham", { horizontalLayout: "full" })));
    commander_1.program
        .description("Cunningham's CLI tool.")
        .option("-o, --output <directory>", "Specify the output dir of generated files.", ".")
        .option("-s, --selector <selector>", "Specify the css root selector element.", ":root")
        .parse(process.argv);
    await (0, exports.buildTheme)();
};
exports.run = run;
//# sourceMappingURL=ThemeGenerator.js.map