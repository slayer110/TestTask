import { Component ,Input} from '@angular/core'
import {Response} from '@angular/http'
import {HttpService} from './http.service'
import {DashboardService} from './dashboard.service'
import {Router} from '@angular/router';

//import { ROUTER_PROVIDERS} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app',
    styleUrls: ['app.component.css'],
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor( public dashboardService:DashboardService, private router:Router) {

    }
    navig1(){ this.dashboardService.aut=false;this.router.navigate(['autor'])}
    }
