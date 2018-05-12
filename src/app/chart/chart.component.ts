import { Component, OnInit,Input } from '@angular/core'
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {HttpService} from "../http.service";
import {Response} from '@angular/http';
import{AppComponent} from '../AppComponent';
import {ChartService} from "../chart.service";
import {DashboardService} from '../dashboard.service'
import {Router} from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'app-chart',
    templateUrl: 'chart.component.html',
    styleUrls: ['chart.component.css'],
})

export class ChartComponent {

    public flagMenu: boolean = false;

    constructor(public chartService:ChartService, public dashboardService:DashboardService, private router:Router) {

    }


    ngOnInit() {
        if (this.dashboardService.aut) {
            this.chartService.submit()
        } else {
            this.router.navigate(['autor'])
        }


    }


}



