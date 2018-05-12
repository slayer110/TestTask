/**
 * Created by Виктор on 24.05.2017.
 */
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {ChartComponent} from './chart/chart.component';
import {Response} from '@angular/http'
import {HttpService} from "./http.service";
import {AmChartsService} from '@amcharts/amcharts3-angular';

@Injectable()
export class ChartService {
    private chart:any;
    dataProvider:any = [];
    nameCur:any;
    public l:any;
    selectedAll:any;
    title:String;
    names:any;
    public  alphaUSD = "1";
    public  alphaEUR = "1";
    public  alphaRUR = "1";
    public  alphaPound = "0";
    public  alphaSviss = "0";
    public  alphaKWD = "0";
    public  nameCurUSD = "USD";
    public   nameCurEUR = "EUR";
    public  nameCurRUR = "RUR";
    public  nameCurPound = "";
    public  nameCurSviss = "";
    public  nameCurKWD = "";

    constructor(private AmCharts:AmChartsService, private httpService:HttpService) {
        this.names = [
            {name: 'USD (Доллар США)', selected: true},
            {name: 'EUR (Евро)', selected: true},
            {name: '100 RUR (Сто росиийских рублей)', selected: true},
            {name: 'Pound Sterling (Фунт стерлингов)', selected: false},
            {name: 'Swiss Franc (Швейцарская крона)', selected: false},
            {name: 'KWD (Кувейтский динар)', selected: false}]
    }


    selectAll() {
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
                this.dragchart()
            }
        }


    }


    checkIfAllSelected(i) {

        this.selectedAll = this.names.every(function (item:any) {
            return item.selected == true;
        })
    }

    dragchart() {
        this.chart = this.AmCharts.makeChart("chartdiv", {
            "dataProvider": this.dataProvider,
            "type": "serial",
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start"
            },
            //"legend": {
            //
            //    "markerBorderAlpha": 0
            //},

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
                    //"lineColor": "#00FF7F"
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
                //},
                //{
                //    "title": "",
                //    "valueField": "value6",
                //    "lineAlpha": this.alphaRUR,
                //    "lineColor": "#00FF7F"
                //
                //
                //}
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

    }


    checkedUSD() {
        if (this.names[0].selected) {
            this.alphaUSD = "1";
            this.nameCurUSD = "USD";
            this.submit();
        }
        else {
            this.nameCurUSD = "";
            this.alphaUSD = "0";
            this.submit();
            return this.alphaUSD


        }
    }

    checkedEUR() {
        if (this.names[1].selected) {
            this.alphaEUR = "1";
            this.nameCurEUR = "EUR";
            this.submit()
        }
        else {
            this.nameCurEUR = "";
            this.alphaEUR = "0";
            this.submit();
            return this.alphaEUR


        }
    }

    checkedRUR() {
        if (this.names[2].selected) {
            this.alphaRUR = "1";
            this.nameCurRUR = "RUR";
            this.submit()
        }
        else {
            this.nameCurRUR = "";
            this.alphaRUR = "0";
            this.submit();
            return this.alphaRUR


        }
    }

    checkedPOUND() {
        if (this.names[3].selected) {
            this.alphaPound = "1";
            this.nameCurPound = "Pound Sterling";
            this.submit()
        }
        else {
            this.nameCurPound = "";
            this.alphaPound = "0";
            this.submit();
            return this.alphaPound;


        }
    }

    checkedSVISS() {
        if (this.names[4].selected) {
            this.alphaSviss = "1";
            this.nameCurSviss = "Swiss Franc";
            this.submit()
        }
        else {
            this.nameCurSviss = "";
            this.alphaSviss = "0";
            this.submit();
            return this.alphaSviss;


        }
    }

    checkedKWD() {
        if (this.names[5].selected) {
            this.alphaKWD = "1";
            this.nameCurKWD = "KWD";
            this.submit()
        }
        else {
            this.nameCurKWD = "";
            this.alphaKWD = "0";
            this.submit();
            return this.alphaKWD;


        }
    }

    submit() {

        this.dataProvider = [];
        this.httpService.getDataUSD().subscribe((dataUSD:Response) => {

            for (let elem of dataUSD.json()) {
                let point:any = {
                    year: null,
                    value: null,
                    value1: null,
                    value2: null
                };
                var year1 = elem.Date.substring(0, elem.Date.length - 9);
                point.year = year1.replace(/-/g, ".");
                point.value = elem.Cur_OfficialRate;
                //point.value1 = (+elem.Cur_OfficialRate + 20) + "";
                this.dataProvider.push(point);

            }

            this.httpService.getDataEURCont().subscribe((dataEURCont:Response) => {
                this.dataProvider.forEach(function (elem, key, dataProvider) {
                    for (let item of dataEURCont.json()) {
                        var year2 = item.Date.substring(0, item.Date.length - 9);
                        var yearp2 = Date.parse(year2);


                        if (year2.replace(/-/g, ".") == elem.year) {
                            dataProvider[key].value1 = "" + item.Cur_OfficialRate/2.2;

                        }

                        //console.log(item.value1);
                    }

                });
            });
            this.httpService.getDataEUR().subscribe((dataEUR:Response) => {

                this.dataProvider.forEach(function (elem, key, dataProvider) {
                    for (let item of dataEUR.json()) {
                        var year1 = item.Date.substring(0, item.Date.length - 9);

                        if (year1.replace(/-/g, ".") == elem.year) {
                            dataProvider[key].value1 = "" + item.Cur_OfficialRate;

                        }

                    }
                });

                this.httpService.getDataRURCont().subscribe((dataRURCont:Response) => {
                    this.dataProvider.forEach(function (elem, key, dataProvider) {
                        for (let item of dataRURCont.json()) {
                            var year2 = item.Date.substring(0, item.Date.length - 9);
                            var yearp2 = Date.parse(year2);


                            if (year2.replace(/-/g, ".") == elem.year) {
                                dataProvider[key].value2 = "" + item.Cur_OfficialRate;

                            }

                            // console.log(elem.value2);
                        }

                    });
                });


                this.httpService.getDataRUR().subscribe((dataRUR:Response) => {
                    var yearp = Date.parse("06.30.2016");
                    //alert(yearp);

                    this.dataProvider.forEach(function (elem, key, dataProvider) {
                        for (let item of dataRUR.json()) {
                            var year2 = item.Date.substring(0, item.Date.length - 9);
                            var yearp2 = Date.parse(year2);


                            if (year2.replace(/-/g, ".") == elem.year) {
                                dataProvider[key].value2 = "" + 100 * item.Cur_OfficialRate;


                            }

                            // console.log(elem.value2);
                        }

                    });


                    this.httpService.getDataPound().subscribe((dataPound:Response) => {

                        this.dataProvider.forEach(function (elem, key, dataProvider) {
                            for (let item of dataPound.json()) {
                                var year3 = item.Date.substring(0, item.Date.length - 9);

                                if (year3.replace(/-/g, ".") == elem.year) {
                                    dataProvider[key].value3 = "" + item.Cur_OfficialRate;

                                }

                            }

                        });


                        this.httpService.getDataSviss().subscribe((dataSwiss:Response) => {

                            this.dataProvider.forEach(function (elem, key, dataProvider) {
                                for (let item of dataSwiss.json()) {
                                    var year4 = item.Date.substring(0, item.Date.length - 9);

                                    if (year4.replace(/-/g, ".") == elem.year) {
                                        dataProvider[key].value4 = "" + item.Cur_OfficialRate;

                                    }

                                }

                            });


                            this.httpService.getDataKWD().subscribe((dataKWD:Response) => {

                                this.dataProvider.forEach(function (elem, key, dataProvider) {
                                    for (let item of dataKWD.json()) {
                                        var year5 = item.Date.substring(0, item.Date.length - 9);

                                        if (year5.replace(/-/g, ".") == elem.year) {
                                            dataProvider[key].value5 = "" + item.Cur_OfficialRate;

                                        }

                                    }

                                });
                                this.dragchart();

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
    }
}
