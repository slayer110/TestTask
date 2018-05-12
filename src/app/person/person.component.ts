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
    //  moduleId: module.id,
    selector: 'apn',
    templateUrl: 'person.component.html'
})

export class PersonComponent {


    constructor(public httpService:HttpService, public dashboardService:DashboardService, private router:Router) {
    }

    public aut:any;

    ngOnInit() {
        this.httpService.Authorization().subscribe((dataFavor:Response)=> {
            this.aut = dataFavor.json().status;

            if (this.aut) {
                this.dashboardService.add2()
            } else {
                this.router.navigate(['autor'])
            }
        });


    }
}











