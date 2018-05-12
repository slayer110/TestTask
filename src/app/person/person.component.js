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
var http_service_1 = require("../http.service");
var dashboard_service_1 = require("../dashboard.service");
var router_1 = require("@angular/router");
var PersonComponent = (function () {
    function PersonComponent(httpService, dashboardService, router) {
        this.httpService = httpService;
        this.dashboardService = dashboardService;
        this.router = router;
    }
    PersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.Authorization().subscribe(function (dataFavor) {
            console.log(dataFavor);
            _this.aut = dataFavor.json().status;
            if (_this.aut) {
                _this.dashboardService.add2();
            }
            else {
                _this.router.navigate(['autor']);
            }
        });
    };
    return PersonComponent;
}());
PersonComponent = __decorate([
    core_1.Component({
        //  moduleId: module.id,
        selector: 'apn',
        templateUrl: './app/person/person.component.html',
        injectables: [dashboard_service_1.DashboardService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService, dashboard_service_1.DashboardService, router_1.Router])
], PersonComponent);
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map