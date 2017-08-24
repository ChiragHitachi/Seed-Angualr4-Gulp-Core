"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var component1_component_1 = require("../components/component1/component1.component");
var child_component_1 = require("../components/component1/child.component");
var Component1_routing_1 = require("./Component1.routing");
var component1AppModule = (function () {
    function component1AppModule() {
    }
    return component1AppModule;
}());
component1AppModule = __decorate([
    core_1.NgModule({
        // directives, components, and pipes
        declarations: [
            component1_component_1.Component1Component,
            child_component_1.ChildComponent,
        ],
        // modules
        imports: [
            Component1_routing_1.Component1AppRouting,
            common_1.CommonModule,
        ],
    })
], component1AppModule);
exports.component1AppModule = component1AppModule;
//# sourceMappingURL=component1.module.js.map