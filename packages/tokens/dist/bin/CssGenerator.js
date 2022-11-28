"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssGenerator = void 0;
const fs = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
const Config_1 = __importDefault(require("./Config"));
const cssGenerator = async (tokens, opts) => {
    const flatTokens = flatify(tokens);
    console.log("flatTokens", flatTokens);
    // Generate CSS too. Temporary.
    const cssVars = Object.keys(flatTokens).reduce((acc, token) => {
        return (acc + `\t--${Config_1.default.sass.varPrefix}${token}: ${flatTokens[token]};\n`);
    }, "");
    const cssContent = `${opts.selector} {\n${cssVars}}`;
    console.log("css", cssContent);
    await fs.writeFile(path.join(opts.path, Config_1.default.sass.tokenFilenameCss), cssContent);
};
exports.cssGenerator = cssGenerator;
const flatify = (obj) => {
    const flatObj = {};
    Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (typeof value === "object") {
            const flatChild = flatify(value);
            Object.keys(flatChild).forEach((subKey) => {
                flatObj[key + Config_1.default.sass.varSeparator + subKey] = flatChild[subKey];
            });
        }
        else {
            flatObj[key] = value;
        }
    });
    return flatObj;
};
//# sourceMappingURL=CssGenerator.js.map