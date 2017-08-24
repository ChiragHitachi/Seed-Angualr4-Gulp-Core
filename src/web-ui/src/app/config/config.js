"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
exports.ENV_APP_PROD_CONFIG = {
    env: 'prod',
    loginUrl: '/security',
};
exports.ENV_APP_TEST_CONFIG = {
    env: 'test',
    loginUrl: ' http://localhost:5001/api/login',
};
var AppConfig = (function () {
    function AppConfig(http) {
        this.http = http;
        this.config = { env: '', loginUrl: '' };
        if (this.config.env.length === 0)
            this.load();
    }
    Object.defineProperty(AppConfig.prototype, "env", {
        get: function () {
            return this.config.env;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig.prototype, "loginUrl", {
        get: function () {
            return this.config.loginUrl;
        },
        enumerable: true,
        configurable: true
    });
    AppConfig.prototype.ngOnInit = function () {
        if (this.config.env.length === 0)
            this.load();
    };
    AppConfig.prototype.load = function () {
        var _this = this;
        this.http.get('src/app/config/env.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (envData) {
            _this.config = envData;
        });
    };
    AppConfig.prototype.getEnv = function (key) {
        return this.env[key];
    };
    AppConfig.prototype.get = function (key) {
        return this.config[key];
    };
    return AppConfig;
}());
AppConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppConfig);
exports.AppConfig = AppConfig;
//# sourceMappingURL=config.js.map