"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var CommonService = (function () {
    function CommonService() {
        var _this = this;
        this.LoginDetail = { id: 0, userId: 0, accessToken: '', userName: '', expires: null };
        this.getAuthToken = function () {
            if (_this.LoginDetail.accessToken.length > 0) {
                return 'Bearer ' + _this.LoginDetail.accessToken;
            }
        };
        this.getRequestHeader = function () {
            var header = new http_1.Headers();
            header.append('Accept', 'application/json');
            header.append('Content-Type', 'application/json');
            header.append('Cache-Control', 'no-cache');
            header.append('Pragma', 'no-cache');
            if (_this.LoginDetail.accessToken.length > 0) {
                header.append('Authorization', _this.getAuthToken());
            }
            return header;
        };
    }
    return CommonService;
}());
CommonService = __decorate([
    core_1.Injectable()
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map