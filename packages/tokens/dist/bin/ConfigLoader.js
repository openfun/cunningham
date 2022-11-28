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
exports.getConfig = void 0;
const path_1 = __importDefault(require("path"));
const deepmerge_1 = __importDefault(require("deepmerge"));
const Config_1 = __importDefault(require("./Config"));
/**
 * TODO: Allow missing local config file ( but warn the user ! )
 */
const getLocalConfig = async () => {
    var _a;
    const configPath = path_1.default.join(process.cwd(), Config_1.default.configurationFilename);
    console.log("configPath", configPath);
    const config = await (_a = configPath, Promise.resolve().then(() => __importStar(require(_a))));
    return config.default;
};
const getDistConfig = async () => {
    const config = await Promise.resolve().then(() => __importStar(require("./cunningham.dist.js")));
    return config.default;
};
const getConfig = async () => {
    const localConfig = await getLocalConfig();
    console.log("localConfig", localConfig);
    const distConfig = await getDistConfig();
    console.log("distConfig", distConfig);
    const config = (0, deepmerge_1.default)(distConfig, localConfig);
    console.log("config", config);
    return config;
};
exports.getConfig = getConfig;
//# sourceMappingURL=ConfigLoader.js.map