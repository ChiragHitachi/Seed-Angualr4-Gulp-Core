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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var enums_1 = require("../models/enums");
var LoginService = (function () {
    function LoginService(webRequest, config, commonService) {
        var _this = this;
        this.webRequest = webRequest;
        this.config = config;
        this.commonService = commonService;
        var vm = this;
        vm.login = function (userId, password) {
            var params = { userName: userId, password: password };
            //return webRequest.post<ILoginDetail>(this.config.loginUrl, params);
            var detail = {
                id: 1,
                userId: 1,
                userName: 'cgupta',
                accessToken: 'askjdbalsdb:asdasdasd',
                expires: new Date(),
                loggedinDate: new Date(),
                isLoggedIn: true
            };
            var reponse = {
                apiUrl: _this.config.loginUrl,
                data: detail,
                messageKey: '',
                status: enums_1.responseStatus.Success
            };
            return Observable_1.Observable.of(reponse);
        };
        vm.canExecute = function (route) {
            //return webRequest.get<ILoginDetail>(this.config.authUrl, {route: route});
            //return Observable.create(true);
            //  return Observable.create(() => { return true });
            var flag = true; // get from api
            return Observable_1.Observable.of(flag);
        };
    }
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject('IWebRequest')), __param(1, core_1.Inject('IAppConfig')),
    __param(2, core_1.Inject('ICommonService')),
    __metadata("design:paramtypes", [Object, Object, Object])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map