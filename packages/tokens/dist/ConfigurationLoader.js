var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import path from "path";
import deepmerge from "deepmerge";
const getLocalConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    const configPath = path.join(process.cwd(), CONFIGURATION_FILE);
    console.log("configPath", configPath);
    const config = yield import(configPath);
    return config.default;
});
const getDistConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    const config = yield import("./cunningham.dist.js");
    return config.default;
});
export const getConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    const localConfig = yield getLocalConfig();
    console.log("localConfig", localConfig);
    const distConfig = yield getDistConfig();
    console.log("distConfig", distConfig);
    const config = deepmerge(distConfig, localConfig);
    console.log("config", config);
    return config;
});
//# sourceMappingURL=ConfigurationLoader.js.map