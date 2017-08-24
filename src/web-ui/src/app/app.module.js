"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var compiler_1 = require("@angular/compiler");
var animations_1 = require("@angular/platform-browser/animations");
require("rxjs/Rx");
var config_1 = require("./config/config");
var translations_1 = require("./config/translations");
var app_routing_1 = require("./app.routing");
var web_request_1 = require("./services/web.request");
var login_service_1 = require("./services/login.service");
var broadcast_service_1 = require("./services/broadcast.service");
var storage_service_1 = require("./services/storage.service");
var common_service_1 = require("./services/common.service");
var translate_service_1 = require("./services/translate.service");
var translatePipe_1 = require("./pipes/translatePipe");
var format_date_pipe_1 = require("./pipes/format-date.pipe");
var app_component_1 = require("./components/app.component");
var landing_component_1 = require("./components/landing/landing.component");
var login_component_1 = require("./components/login/login.component");
var component2_component_1 = require("./components/component2/component2.component");
var SecurityGuard_1 = require("./config/SecurityGuard");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        // directives, components, and pipes
        declarations: [
            app_component_1.AppComponent,
            landing_component_1.LandingComponent,
            login_component_1.LoginComponent,
            translatePipe_1.TranslatePipe,
            component2_component_1.Component2Component,
            format_date_pipe_1.FormatDate
        ],
        // modules
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule,
            app_routing_1.AppRouting,
            forms_1.ReactiveFormsModule,
            animations_1.BrowserAnimationsModule,
        ],
        providers: [
            { provide: 'IAppConfig', useValue: config_1.ENV_APP_TEST_CONFIG },
            { provide: 'IWebRequest', useClass: web_request_1.WebRequest },
            { provide: 'ILoginService', useClass: login_service_1.LoginService },
            { provide: 'ICommonService', useClass: common_service_1.CommonService },
            { provide: 'ITranslateService', useClass: translate_service_1.TranslateService },
            { provide: 'IBroadcastService', useClass: broadcast_service_1.BroadcastService },
            { provide: 'IStorageService', useClass: storage_service_1.StorageService },
            SecurityGuard_1.SecurityGuard,
            translations_1.TRANSLATION_PROVIDERS,
            compiler_1.COMPILER_PROVIDERS
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map