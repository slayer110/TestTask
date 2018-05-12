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
/**
 * Created by Виктор on 16.05.2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.endDate = '2016-12-30';
        this.startDate = '2016-01-01';
        this.date1 = new Date(this.startDate);
    }
    HttpService.prototype.getDataUSD = function () {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/145?startDate=' + this.startDate + '&endDate=' + this.endDate);
    };
    HttpService.prototype.getDataEUR = function () {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/19?startDate=' + this.startDate + '&endDate=' + this.endDate);
    };
    HttpService.prototype.getDataRUR = function () {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/190?startDate=' + this.startDate + '&endDate=' + this.endDate);
    };
    HttpService.prototype.getDataRURCont = function () {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/298?startDate=' + this.startDate + '&endDate=' + this.endDate);
    };
    HttpService.prototype.getDataPound = function () {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/143?startDate=' + this.startDate + '&endDate=' + this.endDate);
    };
    HttpService.prototype.getDataSviss = function () {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/130?startDate=' + this.startDate + '&endDate=' + this.endDate);
    };
    HttpService.prototype.getDataKWD = function () {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/72?startDate=' + this.startDate + '&endDate=' + this.endDate);
    };
    HttpService.prototype.getDataUSD1 = function () {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/?onDate=' + this.startDate + '&Periodicity=0');
    };
    HttpService.prototype.getDataEURCont = function () {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/293?startDate=' + this.startDate + '&endDate=' + this.endDate);
    };
    //getDataEUR1() {
    //    return this.http.get('http://www.nbrb.by/API/ExRates/Rates/19?onDate=' + this.startDate)
    //}
    //
    //getDataRUR1() {
    //    return this.http.get('http://www.nbrb.by/API/ExRates/Rates/190?onDate=' + this.startDate)
    //}
    //
    //getDataPound1() {
    //    return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/143?onDate=' + this.startDate)
    //};
    //
    //getDataSviss1() {
    //    return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/130?onDate=' + this.startDate)
    //};
    //
    //getDataKWD1() {
    //    return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/72?onDate=' + this.startDate)
    //};
    HttpService.prototype.add = function (item) {
        var str = JSON.stringify(item);
        return this.http.get('http://www.back.ru:8080/create.php?data=' + str);
    };
    HttpService.prototype.add1 = function (item) {
        return this.http.get('http://www.back.ru:8080/load.php?data=' + item);
    };
    HttpService.prototype.favorite = function () {
        return this.http.get('http://www.back.ru:8080/load.php?date=' + this.startDate);
    };
    HttpService.prototype.deleteCur = function (item) {
        var str = JSON.stringify(item);
        return this.http.get('http://www.back.ru:8080/create.php?data=' + item);
    };
    HttpService.prototype.Authorization = function () {
        return this.http.get('http://www.back.ru:8080/login.php?login=' + this.login + '&password=' + this.password);
    };
    HttpService.prototype.Exit = function () {
        return this.http.get('http://www.back.ru:8080/exit.php');
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map