/**
 * Created by Виктор on 16.05.2017.
 */
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {ChartComponent} from './chart/chart.component';
import {ChartService} from "./chart.service";
import {DashboardComponent} from "./dashboard/dashboard.component";

@Injectable()
export class HttpService {
    public endDate = '2016-12-30';
    public  startDate = '2016-01-01';
    date1 = new Date(this.startDate);
    public login:any;
    public password:any;

    constructor(private http:Http) {

    }

    getDataUSD() {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/145?startDate=' + this.startDate + '&endDate=' + this.endDate)
    }

    getDataEUR() {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/19?startDate=' + this.startDate + '&endDate=' + this.endDate)
    }

    getDataRUR() {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/190?startDate=' + this.startDate + '&endDate=' + this.endDate)
    }

    getDataRURCont() {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/298?startDate=' + this.startDate + '&endDate=' + this.endDate)
    }

    getDataPound() {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/143?startDate=' + this.startDate + '&endDate=' + this.endDate)
    }

    getDataSviss() {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/130?startDate=' + this.startDate + '&endDate=' + this.endDate)
    }

    getDataKWD() {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/72?startDate=' + this.startDate + '&endDate=' + this.endDate)
    }

    getDataUSD1() {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/?onDate=' + this.startDate + '&Periodicity=0')
    }

    getDataEURCont() {
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/Dynamics/293?startDate=' + this.startDate + '&endDate=' + this.endDate)
    }

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

    add(item) {
        var str = JSON.stringify(item);

        return this.http.get('http://localhost/create.php?data=' + str)

    }

    add1(item) {


        return this.http.get('http://localhost/load.php?data=' + item)

    }

    favorite() {
        return this.http.get('http://localhost/load.php?date=' + this.startDate);

    }

    deleteCur(item) {
        var str = JSON.stringify(item);
        return this.http.get('http://localhost/create.php?data=' + item)

    }

    Authorization() {
        return this.http.get('http://localhost/login.php?login=' +this.login+'&password='+this.password)
    }
    Exit() {
        return this.http.get('http://localhost/exit.php')
    }
}
