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
var core_1 = require('@angular/core');
var scroll_to_1 = require('./scroll-to');
exports.scrollTo = scroll_to_1.scrollTo;
var element_visible_1 = require('./element-visible');
exports.elementVisible = element_visible_1.elementVisible;
var computed_style_1 = require('./computed-style');
exports.computedStyle = computed_style_1.computedStyle;
var outer_width_1 = require('./outer-width');
exports.outerWidth = outer_width_1.outerWidth;
var outer_height_1 = require('./outer-height');
exports.outerHeight = outer_height_1.outerHeight;
var Ng2UtilsModule = (function () {
    function Ng2UtilsModule() {
    }
    Ng2UtilsModule = __decorate([
        core_1.NgModule({
            declarations: [
                scroll_to_1.scrollTo,
                element_visible_1.elementVisible,
                computed_style_1.computedStyle,
                outer_width_1.outerWidth,
                outer_height_1.outerHeight
            ],
            exports: [
                scroll_to_1.scrollTo,
                element_visible_1.elementVisible,
                computed_style_1.computedStyle,
                outer_width_1.outerWidth,
                outer_height_1.outerHeight
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2UtilsModule);
    return Ng2UtilsModule;
}());
exports.Ng2UtilsModule = Ng2UtilsModule;
//# sourceMappingURL=index.js.map