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
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(commonService, router, translateService) {
        this.commonService = commonService;
        this.router = router;
        this.translateService = translateService;
        this.title = 'SP3';
        this.pageKey = 'Role';
        var vm = this;
        vm.translateService.setDefaultLang('en');
        vm.translateService.enableFallback(true);
        if (!vm.LoginDetail || !vm.LoginDetail.isLoggedIn || vm.LoginDetail.accessToken.trim() === '') {
            vm.router.navigateByUrl('/login');
        }
        else {
            vm.router.navigateByUrl('/login');
            vm.router.navigateByUrl(window.location.pathname === '/' ? '/login' : window.location.pathname);
        }
        vm.logout = function () {
            vm.commonService.LoginDetail.isLoggedIn = false;
            if (localStorage.getItem('loginDetail'))
                localStorage.removeItem('loginDetail');
            vm.router.navigateByUrl('/login');
        };
    }
    Object.defineProperty(AppComponent.prototype, "LoginDetail", {
        get: function () {
            if (window.location.pathname.indexOf('login') > 0)
                this.commonService.LoginDetail.isLoggedIn = false;
            return this.commonService.LoginDetail;
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'sp3app',
        templateUrl: './app.component.html',
    }),
    __param(0, core_1.Inject('ICommonService')),
    __param(2, core_1.Inject('ITranslateService')),
    __metadata("design:paramtypes", [Object, router_1.Router, Object])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map