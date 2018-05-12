import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {ChartComponent} from './chart/chart.component';
import {Response} from '@angular/http'
import {HttpService} from "./http.service";
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {DashboardComponent} from './dashboard/dashboard.component'
import {Router } from '@angular/router';

@Injectable()
export class DashboardService {
    public data:Array<any> = [];
    public data1:Array<any> = [];
    public data4:Array<any> = [];
    public rowsOnPage = 5;
    public sortBy = "Date";
    public sortOrder = "asc";
    public data2:Array<any> = [];
    public data3:Array<any> = [];
    public item:any;
    public aut:any;

    public func(item) {
        item.completed = !item.completed;
        //  console.log(item.completed);


        this.httpService.add(item).subscribe((resp:Response)=> {
        });

    }

    //public func1(item) {
    //    !item.completed = item.completed;
    //
    //
    //    this.httpService.add(item).subscribe((resp:Response)=> {
    //    });}

    constructor(public httpService:HttpService,public router:Router) {
    }

    Autor() {
        this.httpService.Authorization().subscribe((dataFavor:Response)=> {
            console.log(dataFavor);
            this.aut = dataFavor.json().status;

           if(this.aut) {this.router.navigate(['person'])}
        });

    }

    exit() {
        this.httpService.Exit().subscribe((dataExit:Response)=> {
            //this.aut = false;
            //this.router.navigate(['./SomewhereElse']);
            //alert(this.aut);


        })
    }

    add2() {
        this.item = '';
        this.data2 = [];
        this.httpService.add1(this.item).subscribe((dataAdd1:Response) => {

            console.log(dataAdd1);

            for (let elem of dataAdd1.json()) {


                this.data2.push(elem);
            }
            //console.log(this.data2);
        });
    }

    delete_Cur(item) {
        item.completed = true;
        item.Cur_ID = item.cur_id;
        item.Date = item.date;
        item.Cur_OfficialRate = item.rate;
        // item.nameRus = item.nameRus;
        item.curCod = item.Cur_Abbreviation;
        this.httpService.add(item).subscribe((resp:Response)=> {
            this.add2();
        });

    }

    favorite() {

        this.httpService.favorite().subscribe((dataFavor:Response)=> {
            this.data3 = [];
            for (let elem of dataFavor.json()) {
                elem.nameEng = elem.cur_cod;
                elem.nameRus = elem[5];
                elem.Cur_OfficialRate = elem.rate;
                elem.Date = elem.date;
                elem.completed = false;
                this.data3.push(elem);
                //this.submit(true);


            }
            this.submit(3)
        })
    }

    noFavorite() {
        this.httpService.favorite().subscribe((dataFavor:Response)=> {
            this.data3 = [];
            for (let elem of dataFavor.json()) {
                elem.nameEng = elem.cur_cod;
                elem.nameRus = elem[5];
                elem.Cur_OfficialRate = elem.rate;
                elem.Date = elem.date;
                this.data3.push(elem);


            }

            this.submit(2);


        })
    }

    favorite1() {

        this.httpService.favorite().subscribe((dataFavor:Response)=> {
            this.data3 = [];
            for (let elem of dataFavor.json()) {
                elem.nameEng = elem.cur_cod;
                elem.nameRus = elem[5];
                elem.Cur_OfficialRate = elem.rate;
                elem.Date = elem.date;
                this.data3.push(elem);


            }

            this.submit(1);

        });


    }

    submit(param) {

        this.data = [];
        this.httpService.getDataUSD1().subscribe((dataUSD1:Response) => {

                if (param == 1) {


                    for (let elem of dataUSD1.json()) {
                        elem.completed = "true";

                        let date = new Date(elem.Date);
                        elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;

                        for (let elem1 of this.data3) {

                            if (elem.Cur_ID == elem1.cur_id && elem.Date == elem1.date) {
                                elem.completed = false;
                            }
                        }


                        if ((elem.Cur_ID == 145)) {
                            elem.nameRus = "Доллар США";
                            elem.nameEng = "USD";
                            //elem.completed = "false";
                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 292)) {
                            elem.nameRus = "Евро";
                            elem.nameEng = "EUR";
                            //elem.completed = "false";

                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 130)) {
                            elem.nameRus = "Швейцарская крона";
                            elem.nameEng = "Swiss Franc";
                            //elem.completed = "false";
                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 190)) {

                            elem.nameRus = "Российский рубль";
                            elem.nameEng = "RUR";
                            //elem.completed = "false";

                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 143)) {
                            elem.nameRus = "Фунт стерлингов";
                            elem.nameEng = "Pound Sterling";
                            //elem.completed = "false";
                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 72)) {
                            elem.nameRus = "Кувейтский динар";
                            elem.nameEng = "KWD";
                            //elem.completed = "false";
                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);

                        }


                    }
                }
                if (param == 2) {


                    for (let elem of dataUSD1.json()) {
                        elem.completed = "true";

                        let date = new Date(elem.Date);
                        elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                        let i = false;
                        for (let elem1 of this.data3) {

                            if (elem.Cur_ID == elem1.cur_id && elem.Date == elem1.date) {
                                i = true;
                            }
                        }
                        if (i) {
                            continue
                        }

                        if ((elem.Cur_ID == 145)) {
                            elem.nameRus = "Доллар США";
                            elem.nameEng = "USD";
                            //elem.completed = "false";
                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 292)) {
                            elem.nameRus = "Евро";
                            elem.nameEng = "EUR";
                            //elem.completed = "false";

                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 130)) {
                            elem.nameRus = "Швейцарская крона";
                            elem.nameEng = "Swiss Franc";
                            //elem.completed = "false";
                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 190)) {

                            elem.nameRus = "Российский рубль";
                            elem.nameEng = "RUR";
                            //elem.completed = "false";

                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 143)) {
                            elem.nameRus = "Фунт стерлингов";
                            elem.nameEng = "Pound Sterling";
                            //elem.completed = "false";
                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 72)) {
                            elem.nameRus = "Кувейтский динар";
                            elem.nameEng = "KWD";
                            //elem.completed = "false";
                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);

                        }


                    }


                }
                if (param == 3) {
                    for (let elem of dataUSD1.json()) {
                        elem.completed = "true";

                        let date = new Date(elem.Date);
                        elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                        let i = true;
                        for (let elem1 of this.data3) {

                            if (elem.Cur_ID == elem1.cur_id && elem.Date == elem1.date) {
                                i = false;
                                elem.completed = false;
                            }
                        }
                        if (i) {
                            continue
                        }

                        if ((elem.Cur_ID == 145)) {
                            elem.nameRus = "Доллар США";
                            elem.nameEng = "USD";
                            //elem.completed = "false";
                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 292)) {
                            elem.nameRus = "Евро";
                            elem.nameEng = "EUR";
                            //elem.completed = "false";

                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 130)) {
                            elem.nameRus = "Швейцарская крона";
                            elem.nameEng = "Swiss Franc";
                            //elem.completed = "false";
                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 190)) {

                            elem.nameRus = "Российский рубль";
                            elem.nameEng = "RUR";
                            //elem.completed = "false";

                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 143)) {
                            elem.nameRus = "Фунт стерлингов";
                            elem.nameEng = "Pound Sterling";
                            //elem.completed = "false";
                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);
                        }
                        if ((elem.Cur_ID == 72)) {
                            elem.nameRus = "Кувейтский динар";
                            elem.nameEng = "KWD";
                            //elem.completed = "false";
                            let date = new Date(elem.Date);
                            elem.Date = `${date.getFullYear()}-${this.checkZero(date.getMonth() + 1)}-${this.checkZero(date.getDate())}`;
                            this.data.push(elem);

                        }


                    }
                }

            }
        )

    }


    checkZero(date:any) {
        if (date.toString().length < 2) {
            return "0" + date;
        } else {
            return date.toString();
        }
    }

    public
    toInt(num:string) {
        return +num;
    }
}
