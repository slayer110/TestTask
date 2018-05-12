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
var chart_service_1 = require("../chart.service");
var dashboard_service_1 = require("../dashboard.service");
var router_1 = require("@angular/router");
var ChartComponent = (function () {
    function ChartComponent(chartService, dashboardService, router) {
        this.chartService = chartService;
        this.dashboardService = dashboardService;
        this.router = router;
    }
    ChartComponent.prototype.ngOnInit = function () {
        if (this.dashboardService.aut) {
            this.chartService.submit();
        }
        else {
            this.router.navigate(['autor']);
        }
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-chart',
        templateUrl: 'chart.component.html',
        injectables: [dashboard_service_1.DashboardService]
    }),
    __metadata("design:paramtypes", [chart_service_1.ChartService, dashboard_service_1.DashboardService, router_1.Router])
], ChartComponent);
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map