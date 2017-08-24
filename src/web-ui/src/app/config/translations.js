"use strict";
var core_1 = require("@angular/core");
// import translations
var translate_en_1 = require("../config/translate-en");
var translate_fr_1 = require("../config/translate-fr");
// translation token
exports.TRANSLATIONS = new core_1.OpaqueToken('translations');
// all traslations
var dictionary = (_a = {},
    _a[translate_en_1.LANG_EN_NAME] = translate_en_1.LANG_EN_TRANS,
    _a[translate_fr_1.LANG_FR_NAME] = translate_fr_1.LANG_FR_TRANS,
    _a);
// providers
exports.TRANSLATION_PROVIDERS = [
    { provide: exports.TRANSLATIONS, useValue: dictionary },
];
var _a;
//# sourceMappingURL=translations.js.map