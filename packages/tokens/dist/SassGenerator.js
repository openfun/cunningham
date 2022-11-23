var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fs from "fs/promises";
import * as path from "path";
import Config from "./Config.js";
export const sassGenerator = (tokens, opts) => __awaiter(void 0, void 0, void 0, function* () {
    const flatTokens = flatify(tokens);
    console.log("flatTokens", flatTokens);
    const content = Object.keys(flatTokens).reduce((acc, token) => {
        return acc + `\n$${Config.sass.varPrefix}${token}: ${flatTokens[token]};`;
    }, "");
    console.log("content", content);
    yield fs.writeFile(path.join(opts.path, Config.sass.tokenFilename), content);
});
const flatify = (obj) => {
    const flatObj = {};
    Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (typeof value === "object") {
            const flatChild = flatify(value);
            Object.keys(flatChild).forEach((subKey) => {
                flatObj[key + Config.sass.varSeparator + subKey] = flatChild[subKey];
            });
        }
        else {
            flatObj[key] = value;
        }
    });
    return flatObj;
};
//# sourceMappingURL=SassGenerator.js.map