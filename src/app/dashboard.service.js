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
var http_service_1 = require("./http.service");
var router_1 = require("@angular/router");
var DashboardService = (function () {
    //public func1(item) {
    //    !item.completed = item.completed;
    //
    //
    //    this.httpService.add(item).subscribe((resp:Response)=> {
    //    });}
    function DashboardService(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.data = [];
        this.data1 = [];
        this.data4 = [];
        this.rowsOnPage = 5;
        this.sortBy = "Date";
        this.sortOrder = "asc";
        this.data2 = [];
        this.data3 = [];
    }
    DashboardService.prototype.func = function (item) {
        item.completed = !item.completed;
        //  console.log(item.completed);
        this.httpService.add(item).subscribe(function (resp) {
        });
    };
    DashboardService.prototype.Autor = function () {
        var _this = this;
        this.httpService.Authorization().subscribe(function (dataFavor) {
            console.log(dataFavor);
            _this.aut = dataFavor.json().status;
            if (_this.aut) {
                _this.router.navigate(['person']);
            }
        });
    };
    DashboardService.prototype.exit = function () {
        this.httpService.Exit().subscribe(function (dataExit) {
            //this.aut = false;
            //this.router.navigate(['./SomewhereElse']);
            //alert(this.aut);
        });
    };
    DashboardService.prototype.add2 = function () {
        var _this = this;
        this.item = '';
        this.data2 = [];
        this.httpService.add1(this.item).subscribe(function (dataAdd1) {
            for (var _i = 0, _a = dataAdd1.json(); _i < _a.length; _i++) {
                var elem = _a[_i];
                _this.data2.push(elem);
            }
            //console.log(this.data2);
        });
    };
    DashboardService.prototype.delete_Cur = function (item) {
        var _this = this;
        item.completed = true;
        item.Cur_ID = item.cur_id;
        item.Date = item.date;
        item.Cur_OfficialRate = item.rate;
        // item.nameRus = item.nameRus;
        item.curCod = item.Cur_Abbreviation;
        this.httpService.add(item).subscribe(function (resp) {
            _this.add2();
        });
    };
    DashboardService.prototype.favorite = function () {
        var _this = this;
        this.httpService.favorite().subscribe(function (dataFavor) {
            _this.data3 = [];
            for (var _i = 0, _a = dataFavor.json(); _i < _a.length; _i++) {
                var elem = _a[_i];
                elem.nameEng = elem.cur_cod;
                elem.nameRus = elem[5];
                elem.Cur_OfficialRate = elem.rate;
                elem.Date = elem.date;
                elem.completed = false;
                _this.data3.push(elem);
            }
            _this.submit(3);
        });
    };
    DashboardService.prototype.noFavorite = function () {
        var _this = this;
        this.httpService.favorite().subscribe(function (dataFavor) {
            _this.data3 = [];
            for (var _i = 0, _a = dataFavor.json(); _i < _a.length; _i++) {
                var elem = _a[_i];
                elem.nameEng = elem.cur_cod;
                elem.nameRus = elem[5];
                elem.Cur_OfficialRate = elem.rate;
                elem.Date = elem.date;
                _this.data3.push(elem);
            }
            _this.submit(2);
        });
    };
    DashboardService.prototype.favorite1 = function () {
        var _this = this;
        this.httpService.favorite().subscribe(function (dataFavor) {
            _this.data3 = [];
            for (var _i = 0, _a = dataFavor.json(); _i < _a.length; _i++) {
                var elem = _a[_i];
                elem.nameEng = elem.cur_cod;
                elem.nameRus = elem[5];
                elem.Cur_OfficialRate = elem.rate;
                elem.Date = elem.date;
                _this.data3.push(elem);
            }
            _this.submit(1);
        });
    };
    DashboardService.prototype.submit = function (param) {
        var _this = this;
        this.data = [];
        this.httpService.getDataUSD1().subscribe(function (dataUSD1) {
            if (param == 1) {
                for (var _i = 0, _a = dataUSD1.json(); _i < _a.length; _i++) {
                    var elem = _a[_i];
                    elem.completed = "true";
                    var date = new Date(elem.Date);
                    elem.Date = date.getFullYear() + "-" + _this.checkZero(date.getMonth() + 1) + "-" + _this.checkZero(date.getDate());
                    for (var _b = 0, _c = _this.data3; _b < _c.length; _b++) {
                        var elem1 = _c[_b];
                        if (elem.Cur_ID == elem1.cur_id && elem.Date == elem1.date) {
                            elem.completed = false;
                        }
                    }
                    if ((elem.Cur_ID == 145)) {
                        elem.nameRus = "Доллар США";
                        elem.nameEng = "USD";
                        //elem.completed = "false";
                        var date_1 = new Date(elem.Date);
                        elem.Date = date_1.getFullYear() + "-" + _this.checkZero(date_1.getMonth() + 1) + "-" + _this.checkZero(date_1.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 292)) {
                        elem.nameRus = "Евро";
                        elem.nameEng = "EUR";
                        //elem.completed = "false";
                        var date_2 = new Date(elem.Date);
                        elem.Date = date_2.getFullYear() + "-" + _this.checkZero(date_2.getMonth() + 1) + "-" + _this.checkZero(date_2.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 130)) {
                        elem.nameRus = "Швейцарская крона";
                        elem.nameEng = "Swiss Franc";
                        //elem.completed = "false";
                        var date_3 = new Date(elem.Date);
                        elem.Date = date_3.getFullYear() + "-" + _this.checkZero(date_3.getMonth() + 1) + "-" + _this.checkZero(date_3.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 190)) {
                        elem.nameRus = "Российский рубль";
                        elem.nameEng = "RUR";
                        //elem.completed = "false";
                        elem.Date = date.getFullYear() + "-" + _this.checkZero(date.getMonth() + 1) + "-" + _this.checkZero(date.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 143)) {
                        elem.nameRus = "Фунт стерлингов";
                        elem.nameEng = "Pound Sterling";
                        //elem.completed = "false";
                        var date_4 = new Date(elem.Date);
                        elem.Date = date_4.getFullYear() + "-" + _this.checkZero(date_4.getMonth() + 1) + "-" + _this.checkZero(date_4.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 72)) {
                        elem.nameRus = "Кувейтский динар";
                        elem.nameEng = "KWD";
                        //elem.completed = "false";
                        var date_5 = new Date(elem.Date);
                        elem.Date = date_5.getFullYear() + "-" + _this.checkZero(date_5.getMonth() + 1) + "-" + _this.checkZero(date_5.getDate());
                        _this.data.push(elem);
                    }
                }
            }
            if (param == 2) {
                for (var _d = 0, _e = dataUSD1.json(); _d < _e.length; _d++) {
                    var elem = _e[_d];
                    elem.completed = "true";
                    var date = new Date(elem.Date);
                    elem.Date = date.getFullYear() + "-" + _this.checkZero(date.getMonth() + 1) + "-" + _this.checkZero(date.getDate());
                    var i = false;
                    for (var _f = 0, _g = _this.data3; _f < _g.length; _f++) {
                        var elem1 = _g[_f];
                        if (elem.Cur_ID == elem1.cur_id && elem.Date == elem1.date) {
                            i = true;
                        }
                    }
                    if (i) {
                        continue;
                    }
                    if ((elem.Cur_ID == 145)) {
                        elem.nameRus = "Доллар США";
                        elem.nameEng = "USD";
                        //elem.completed = "false";
                        var date_6 = new Date(elem.Date);
                        elem.Date = date_6.getFullYear() + "-" + _this.checkZero(date_6.getMonth() + 1) + "-" + _this.checkZero(date_6.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 292)) {
                        elem.nameRus = "Евро";
                        elem.nameEng = "EUR";
                        //elem.completed = "false";
                        var date_7 = new Date(elem.Date);
                        elem.Date = date_7.getFullYear() + "-" + _this.checkZero(date_7.getMonth() + 1) + "-" + _this.checkZero(date_7.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 130)) {
                        elem.nameRus = "Швейцарская крона";
                        elem.nameEng = "Swiss Franc";
                        //elem.completed = "false";
                        var date_8 = new Date(elem.Date);
                        elem.Date = date_8.getFullYear() + "-" + _this.checkZero(date_8.getMonth() + 1) + "-" + _this.checkZero(date_8.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 190)) {
                        elem.nameRus = "Российский рубль";
                        elem.nameEng = "RUR";
                        //elem.completed = "false";
                        elem.Date = date.getFullYear() + "-" + _this.checkZero(date.getMonth() + 1) + "-" + _this.checkZero(date.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 143)) {
                        elem.nameRus = "Фунт стерлингов";
                        elem.nameEng = "Pound Sterling";
                        //elem.completed = "false";
                        var date_9 = new Date(elem.Date);
                        elem.Date = date_9.getFullYear() + "-" + _this.checkZero(date_9.getMonth() + 1) + "-" + _this.checkZero(date_9.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 72)) {
                        elem.nameRus = "Кувейтский динар";
                        elem.nameEng = "KWD";
                        //elem.completed = "false";
                        var date_10 = new Date(elem.Date);
                        elem.Date = date_10.getFullYear() + "-" + _this.checkZero(date_10.getMonth() + 1) + "-" + _this.checkZero(date_10.getDate());
                        _this.data.push(elem);
                    }
                }
            }
            if (param == 3) {
                for (var _h = 0, _j = dataUSD1.json(); _h < _j.length; _h++) {
                    var elem = _j[_h];
                    elem.completed = "true";
                    var date = new Date(elem.Date);
                    elem.Date = date.getFullYear() + "-" + _this.checkZero(date.getMonth() + 1) + "-" + _this.checkZero(date.getDate());
                    var i = true;
                    for (var _k = 0, _l = _this.data3; _k < _l.length; _k++) {
                        var elem1 = _l[_k];
                        if (elem.Cur_ID == elem1.cur_id && elem.Date == elem1.date) {
                            i = false;
                            elem.completed = false;
                        }
                    }
                    if (i) {
                        continue;
                    }
                    if ((elem.Cur_ID == 145)) {
                        elem.nameRus = "Доллар США";
                        elem.nameEng = "USD";
                        //elem.completed = "false";
                        var date_11 = new Date(elem.Date);
                        elem.Date = date_11.getFullYear() + "-" + _this.checkZero(date_11.getMonth() + 1) + "-" + _this.checkZero(date_11.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 292)) {
                        elem.nameRus = "Евро";
                        elem.nameEng = "EUR";
                        //elem.completed = "false";
                        var date_12 = new Date(elem.Date);
                        elem.Date = date_12.getFullYear() + "-" + _this.checkZero(date_12.getMonth() + 1) + "-" + _this.checkZero(date_12.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 130)) {
                        elem.nameRus = "Швейцарская крона";
                        elem.nameEng = "Swiss Franc";
                        //elem.completed = "false";
                        var date_13 = new Date(elem.Date);
                        elem.Date = date_13.getFullYear() + "-" + _this.checkZero(date_13.getMonth() + 1) + "-" + _this.checkZero(date_13.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 190)) {
                        elem.nameRus = "Российский рубль";
                        elem.nameEng = "RUR";
                        //elem.completed = "false";
                        elem.Date = date.getFullYear() + "-" + _this.checkZero(date.getMonth() + 1) + "-" + _this.checkZero(date.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 143)) {
                        elem.nameRus = "Фунт стерлингов";
                        elem.nameEng = "Pound Sterling";
                        //elem.completed = "false";
                        var date_14 = new Date(elem.Date);
                        elem.Date = date_14.getFullYear() + "-" + _this.checkZero(date_14.getMonth() + 1) + "-" + _this.checkZero(date_14.getDate());
                        _this.data.push(elem);
                    }
                    if ((elem.Cur_ID == 72)) {
                        elem.nameRus = "Кувейтский динар";
                        elem.nameEng = "KWD";
                        //elem.completed = "false";
                        var date_15 = new Date(elem.Date);
                        elem.Date = date_15.getFullYear() + "-" + _this.checkZero(date_15.getMonth() + 1) + "-" + _this.checkZero(date_15.getDate());
                        _this.data.push(elem);
                    }
                }
            }
        });
    };
    DashboardService.prototype.checkZero = function (date) {
        if (date.toString().length < 2) {
            return "0" + date;
        }
        else {
            return date.toString();
        }
    };
    DashboardService.prototype.toInt = function (num) {
        return +num;
    };
    return DashboardService;
}());
DashboardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map