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
 * Created by Виктор on 24.05.2017.
 */
var core_1 = require("@angular/core");
var http_service_1 = require("./http.service");
var amcharts3_angular2_1 = require("amcharts3-angular2");
var ChartService = (function () {
    function ChartService(AmCharts, httpService) {
        this.AmCharts = AmCharts;
        this.httpService = httpService;
        this.dataProvider = [];
        this.alphaUSD = "1";
        this.alphaEUR = "1";
        this.alphaRUR = "1";
        this.alphaPound = "0";
        this.alphaSviss = "0";
        this.alphaKWD = "0";
        this.nameCurUSD = "USD";
        this.nameCurEUR = "EUR";
        this.nameCurRUR = "RUR";
        this.nameCurPound = "";
        this.nameCurSviss = "";
        this.nameCurKWD = "";
        this.names = [
            { name: 'USD (Доллар США)', selected: true },
            { name: 'EUR (Евро)', selected: true },
            { name: '100 RUR (Сто росиийских рублей)', selected: true },
            { name: 'Pound Sterling (Фунт стерлингов)', selected: false },
            { name: 'Swiss Franc (Швейцарская крона)', selected: false },
            { name: 'KWD (Кувейтский динар)', selected: false }
        ];
    }
    ChartService.prototype.selectAll = function () {
        for (var i = 0; i < this.names.length; i++) {
            this.names[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.alphaEUR = "1";
                this.alphaUSD = "1";
                this.alphaRUR = "1";
                this.alphaPound = "1";
                this.alphaSviss = "1";
                this.alphaKWD = "1";
                this.nameCurUSD = "USD";
                this.nameCurEUR = "EUR";
                this.nameCurRUR = "RUR";
                this.nameCurPound = "Pound Sterling";
                this.nameCurSviss = "Swiss Franc";
                this.nameCurKWD = "KWD";
                this.dragchart();
            }
            else {
                this.alphaEUR = "0";
                this.alphaUSD = "0";
                this.alphaRUR = "0";
                this.alphaPound = "0";
                this.alphaSviss = "0";
                this.alphaKWD = "0";
                this.nameCurUSD = "";
                this.nameCurEUR = " ";
                this.nameCurRUR = " ";
                this.nameCurPound = " ";
                this.nameCurSviss = " ";
                this.nameCurKWD = " ";
                this.dragchart();
            }
        }
    };
    ChartService.prototype.checkIfAllSelected = function (i) {
        this.selectedAll = this.names.every(function (item) {
            return item.selected == true;
        });
    };
    ChartService.prototype.dragchart = function () {
        this.chart = this.AmCharts.makeChart("chartdiv", {
            "dataProvider": this.dataProvider,
            "type": "serial",
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start"
            },
            "legend": {
                "markerBorderAlpha": 0
            },
            "graphs": [
                {
                    "title": this.nameCurUSD,
                    "valueField": "value",
                    // "bulletalpha":"#000080",
                    "lineAlpha": this.alphaUSD,
                },
                {
                    "title": this.nameCurEUR,
                    "valueField": "value1",
                    "lineAlpha": this.alphaEUR,
                },
                {
                    "title": this.nameCurRUR,
                    "valueField": "value2",
                    "lineAlpha": this.alphaRUR,
                },
                {
                    "title": this.nameCurPound,
                    "valueField": "value3",
                    "lineAlpha": this.alphaPound
                },
                {
                    "title": this.nameCurSviss,
                    "valueField": "value4",
                    "lineAlpha": this.alphaSviss
                },
                {
                    "title": this.nameCurKWD,
                    "valueField": "value5",
                    "lineAlpha": this.alphaKWD
                }
            ],
            "valueAxes": [
                {
                    "title": "Бел.рубли"
                }
            ],
            "legend": {
                "useGraphSettings": true,
                "align": "center",
                "marginLeft": "100"
            },
            "titles": [
                {
                    "size": 15,
                    "text": "Курс валют"
                }
            ]
        });
    };
    ChartService.prototype.checkedUSD = function () {
        if (this.names[0].selected) {
            this.alphaUSD = "1";
            this.nameCurUSD = "USD";
            this.submit();
        }
        else {
            this.nameCurUSD = "";
            this.alphaUSD = "0";
            this.submit();
            return this.alphaUSD;
        }
    };
    ChartService.prototype.checkedEUR = function () {
        if (this.names[1].selected) {
            this.alphaEUR = "1";
            this.nameCurEUR = "EUR";
            this.submit();
        }
        else {
            this.nameCurEUR = "";
            this.alphaEUR = "0";
            this.submit();
            return this.alphaEUR;
        }
    };
    ChartService.prototype.checkedRUR = function () {
        if (this.names[2].selected) {
            this.alphaRUR = "1";
            this.nameCurRUR = "RUR";
            this.submit();
        }
        else {
            this.nameCurRUR = "";
            this.alphaRUR = "0";
            this.submit();
            return this.alphaRUR;
        }
    };
    ChartService.prototype.checkedPOUND = function () {
        if (this.names[3].selected) {
            this.alphaPound = "1";
            this.nameCurPound = "Pound Sterling";
            this.submit();
        }
        else {
            this.nameCurPound = "";
            this.alphaPound = "0";
            this.submit();
            return this.alphaPound;
        }
    };
    ChartService.prototype.checkedSVISS = function () {
        if (this.names[4].selected) {
            this.alphaSviss = "1";
            this.nameCurSviss = "Swiss Franc";
            this.submit();
        }
        else {
            this.nameCurSviss = "";
            this.alphaSviss = "0";
            this.submit();
            return this.alphaSviss;
        }
    };
    ChartService.prototype.checkedKWD = function () {
        if (this.names[5].selected) {
            this.alphaKWD = "1";
            this.nameCurKWD = "KWD";
            this.submit();
        }
        else {
            this.nameCurKWD = "";
            this.alphaKWD = "0";
            this.submit();
            return this.alphaKWD;
        }
    };
    ChartService.prototype.submit = function () {
        var _this = this;
        this.dataProvider = [];
        this.httpService.getDataUSD().subscribe(function (dataUSD) {
            for (var _i = 0, _a = dataUSD.json(); _i < _a.length; _i++) {
                var elem = _a[_i];
                var point = {
                    year: null,
                    value: null,
                    value1: null,
                    value2: null
                };
                var year1 = elem.Date.substring(0, elem.Date.length - 9);
                point.year = year1.replace(/-/g, ".");
                point.value = elem.Cur_OfficialRate;
                //point.value1 = (+elem.Cur_OfficialRate + 20) + "";
                _this.dataProvider.push(point);
            }
            _this.httpService.getDataEURCont().subscribe(function (dataEURCont) {
                _this.dataProvider.forEach(function (elem, key, dataProvider) {
                    for (var _i = 0, _a = dataEURCont.json(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        var year2 = item.Date.substring(0, item.Date.length - 9);
                        var yearp2 = Date.parse(year2);
                        if (year2.replace(/-/g, ".") == elem.year) {
                            dataProvider[key].value1 = "" + item.Cur_OfficialRate / 2.2;
                        }
                    }
                });
            });
            _this.httpService.getDataEUR().subscribe(function (dataEUR) {
                _this.dataProvider.forEach(function (elem, key, dataProvider) {
                    for (var _i = 0, _a = dataEUR.json(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        var year1 = item.Date.substring(0, item.Date.length - 9);
                        if (year1.replace(/-/g, ".") == elem.year) {
                            dataProvider[key].value1 = "" + item.Cur_OfficialRate;
                        }
                    }
                });
                _this.httpService.getDataRURCont().subscribe(function (dataRURCont) {
                    _this.dataProvider.forEach(function (elem, key, dataProvider) {
                        for (var _i = 0, _a = dataRURCont.json(); _i < _a.length; _i++) {
                            var item = _a[_i];
                            var year2 = item.Date.substring(0, item.Date.length - 9);
                            var yearp2 = Date.parse(year2);
                            if (year2.replace(/-/g, ".") == elem.year) {
                                dataProvider[key].value2 = "" + item.Cur_OfficialRate;
                            }
                        }
                    });
                });
                _this.httpService.getDataRUR().subscribe(function (dataRUR) {
                    var yearp = Date.parse("06.30.2016");
                    //alert(yearp);
                    _this.dataProvider.forEach(function (elem, key, dataProvider) {
                        for (var _i = 0, _a = dataRUR.json(); _i < _a.length; _i++) {
                            var item = _a[_i];
                            var year2 = item.Date.substring(0, item.Date.length - 9);
                            var yearp2 = Date.parse(year2);
                            if (year2.replace(/-/g, ".") == elem.year) {
                                dataProvider[key].value2 = "" + 100 * item.Cur_OfficialRate;
                            }
                        }
                    });
                    _this.httpService.getDataPound().subscribe(function (dataPound) {
                        _this.dataProvider.forEach(function (elem, key, dataProvider) {
                            for (var _i = 0, _a = dataPound.json(); _i < _a.length; _i++) {
                                var item = _a[_i];
                                var year3 = item.Date.substring(0, item.Date.length - 9);
                                if (year3.replace(/-/g, ".") == elem.year) {
                                    dataProvider[key].value3 = "" + item.Cur_OfficialRate;
                                }
                            }
                        });
                        _this.httpService.getDataSviss().subscribe(function (dataSwiss) {
                            _this.dataProvider.forEach(function (elem, key, dataProvider) {
                                for (var _i = 0, _a = dataSwiss.json(); _i < _a.length; _i++) {
                                    var item = _a[_i];
                                    var year4 = item.Date.substring(0, item.Date.length - 9);
                                    if (year4.replace(/-/g, ".") == elem.year) {
                                        dataProvider[key].value4 = "" + item.Cur_OfficialRate;
                                    }
                                }
                            });
                            _this.httpService.getDataKWD().subscribe(function (dataKWD) {
                                _this.dataProvider.forEach(function (elem, key, dataProvider) {
                                    for (var _i = 0, _a = dataKWD.json(); _i < _a.length; _i++) {
                                        var item = _a[_i];
                                        var year5 = item.Date.substring(0, item.Date.length - 9);
                                        if (year5.replace(/-/g, ".") == elem.year) {
                                            dataProvider[key].value5 = "" + item.Cur_OfficialRate;
                                        }
                                    }
                                });
                                _this.dragchart();
                                //this.httpService.getDataRURCont().subscribe((dataKWD:Response) => {
                                //
                                //        this.dataProvider.forEach(function (elem, key, dataProvider) {
                                //            for (let item of dataKWD.json()) {
                                //                var year6 = item.Date.substring(0, item.Date.length - 9);
                                //
                                //                if (year6.replace(/-/g, ".") == elem.year) {
                                //                    dataProvider[key].value6 = "" + item.Cur_OfficialRate;
                                //
                                //                }
                                //
                                //            }
                                //
                                //        });
                                //
                                //
                                //    }
                                //);
                            });
                        });
                    });
                });
            });
        });
    };
    return ChartService;
}());
ChartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [amcharts3_angular2_1.AmChartsService, http_service_1.HttpService])
], ChartService);
exports.ChartService = ChartService;
//# sourceMappingURL=chart.service.js.map