"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokensGenerator = void 0;
const tokensGenerator = (config) => {
    return {
        colors: Object.assign({}, config.theme.colors),
        text: Object.assign({}, config.theme.colors),
    };
};
exports.tokensGenerator = tokensGenerator;
//# sourceMappingURL=TokensGenerator.js.map