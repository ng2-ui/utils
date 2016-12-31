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
var html_code_pipe_1 = require("./pipes/html-code.pipe");
var javascript_code_pipe_1 = require("./pipes/javascript-code.pipe");
var ng2_utils_directive_1 = require("./directives/ng2-utils.directive");
var Ng2UtilsModule = (function () {
    function Ng2UtilsModule() {
    }
    return Ng2UtilsModule;
}());
Ng2UtilsModule = __decorate([
    core_1.NgModule({
        declarations: [
            html_code_pipe_1.HtmlCodePipe,
            javascript_code_pipe_1.JavascriptCodePipe,
            ng2_utils_directive_1.Ng2UtilsDirective
        ],
        exports: [
            html_code_pipe_1.HtmlCodePipe,
            javascript_code_pipe_1.JavascriptCodePipe,
            ng2_utils_directive_1.Ng2UtilsDirective
        ]
    }),
    __metadata("design:paramtypes", [])
], Ng2UtilsModule);
exports.Ng2UtilsModule = Ng2UtilsModule;
//# sourceMappingURL=ng2-utils.module.js.map