import { Component,ViewChild, OnInit,Input,ElementRef } from '@angular/core'
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {HttpService} from "../http.service";
import {Response} from '@angular/http'
import{AppComponent} from '../AppComponent'
import {ChartService} from '../chart.service'
import {Http} from '@angular/http'
import {DashboardService} from '../dashboard.service'
import {Router} from '@angular/router';



@Component({
    selector: 'demo',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
})


export class DashboardComponent {


    public mf:any;
    //public favoriteLink(){mf.zinputData=this.dashboardService.data3;}


    constructor(public chartService:ChartService, public dashboardService:DashboardService,private router:Router) {

    }


    ngOnInit() {
        if(this.dashboardService.aut) {this.dashboardService.favorite1()} else {this.router.navigate(['autor'])}



    }


}


