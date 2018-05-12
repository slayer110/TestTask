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
    moduleId: module.id,
    selector: 'autor',
    templateUrl: 'autor.component.html',
    styleUrls: ['author.component.css']
    // providers: [ROUTER_PROVIDERS]

})

export class AutorComponent {


    constructor(public dashboardService:DashboardService, private router:Router) {


    }


}
