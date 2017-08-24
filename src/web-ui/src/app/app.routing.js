"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login/login.component");
var landing_component_1 = require("./components/landing/landing.component");
var component2_component_1 = require("./components/component2/component2.component");
var SecurityGuard_1 = require("./config/SecurityGuard");
var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'landing',
        component: landing_component_1.LandingComponent
    },
    {
        path: 'component2',
        component: component2_component_1.Component2Component,
        canActivate: [SecurityGuard_1.SecurityGuard],
    },
    {
        path: 'component1',
        loadChildren: '/app/lazy/component1.module#component1AppModule'
    }
];
exports.AppRoutingProviders = [];
exports.AppRouting = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map