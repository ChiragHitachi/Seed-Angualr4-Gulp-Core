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
var Component1Component = (function () {
    function Component1Component() {
        this.title = 'How Are you';
    }
    Component1Component.prototype.handleClick = function () {
        this.title = 'What is the plan for today';
    };
    Component1Component.prototype.handleReply = function (value) {
        console.log(value);
        this.message = value;
    };
    return Component1Component;
}());
Component1Component = __decorate([
    core_1.Component({
        selector: 'app-comp1',
        templateUrl: './component1.component.html'
    }),
    __metadata("design:paramtypes", [])
], Component1Component);
exports.Component1Component = Component1Component;
//# sourceMappingURL=component1.component.js.map