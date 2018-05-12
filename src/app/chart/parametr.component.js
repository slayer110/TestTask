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
//import { ROUTER_PROVIDERS} from "@angular/router";
var ParametrComponent = (function () {
    function ParametrComponent() {
    }
    ParametrComponent.prototype.submit = function (startDate, endDate) {
        ;
    };
    ParametrComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'par-ad',
            styles: ["\n        .active {color:green;}\n    "],
            template: "<div>\n        <label>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0443\u044E \u0434\u0430\u0442\u0443</label>\n    <input class=\"form-control\" type=\"date\" name=\"startDate\" [(ngModel)]=\"startDate\"/>\n    <label>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043D\u0435\u0447\u043D\u0443\u044E \u0434\u0430\u0442\u0443</label>\n<input class=\"form-control\" type=\"date\" name=\"endDate\" [(ngModel)]=\"endDate\"/>\n<div class=\"form-group\">\n<button class=\"btn btn-default\" (click)=\"submit(startDate,endDate)\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n    </div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ParametrComponent);
    return ParametrComponent;
}());
exports.ParametrComponent = ParametrComponent;
//# sourceMappingURL=parametr.component.js.map