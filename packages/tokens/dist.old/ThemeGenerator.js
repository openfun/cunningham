var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { program } from "commander";
import chalk from "chalk";
import figlet from "figlet";
import { getConfig } from "./ConfigLoader.js";
import { tokensGenerator } from "./TokensGenerator.js";
import { cssGenerator } from "./CssGenerator.js";
export const buildTheme = () => __awaiter(void 0, void 0, void 0, function* () {
    const config = yield getConfig();
    const tokens = tokensGenerator(config);
    console.log("tokens", tokens);
    const options = program.opts();
    console.log(options);
    yield cssGenerator(tokens, {
        path: options.output,
        selector: options.selector,
    });
});
export const run = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(chalk.red(figlet.textSync("Cunningham", { horizontalLayout: "full" })));
    program
        .description("Cunningham's CLI tool.")
        .option("-o, --output <directory>", "Specify the output dir of generated files.", ".")
        .option("-s, --selector <selector>", "Specify the css root selector element.", ":root")
        .parse(process.argv);
    yield buildTheme();
});
//# sourceMappingURL=ThemeGenerator.js.map