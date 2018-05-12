import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import {AppComponent} from './app.component';
import {ChartComponent} from './chart/chart.component';
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import { RouterModule, Routes } from '@angular/router';
import {PersonComponent} from  './person/person.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {HttpService} from "./http.service";
import {ChartService} from "./chart.service";
import {DataTableModule} from "angular2-datatable";
import {DashboardService} from './dashboard.service';
import {AutorComponent} from './autor/autor.component';
import { MatCardModule, MatListModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//noinspection TypeScriptValidateTypes
const appRouts:Routes = [
  {
    path: 'autor',
    component: AutorComponent
  },
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'person',
    component: PersonComponent
  },
  {
    path: '',
    component: AutorComponent
  },
  {
    path: '**',
    component: PersonComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AmChartsModule,
    RouterModule.forRoot(appRouts),
    MatCardModule,
    MatListModule,
    MatInputModule,
      MatIconModule,
      MatCheckboxModule,
    MatButtonModule,
    HttpModule,
    BrowserAnimationsModule,
    DataTableModule
  ],
  declarations: [AppComponent, ChartComponent, PersonComponent, DashboardComponent, AutorComponent],
  bootstrap: [AppComponent],
  providers: [HttpService, ChartService, DashboardService],
  exports: [DashboardComponent]
})
export class AppModule {

}
