import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SmartTableModule} from 'smart-table-ng'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { ProductionPlanComponent } from './components/production-plan/production-plan.component';
import { ProductionProcessComponent } from './components/production-plan/production-process/production-process.component';
import { CurrentStatesComponent } from './components/production-plan/current-states/current-states.component';
import { DispatchedWorkersRecordComponent } from './components/production-plan/dispatched-workers-record/dispatched-workers-record.component';
import { ReportRecordsComponent } from './components/production-plan/report-records/report-records.component';
import { QRTContentComponent } from './components/production-plan/qrt-content/qrt-content.component';
import {ProjectManagementComponent} from './components/project-management/project-management.component'

import * as $ from 'jquery';
import { ProductionPlanManagementComponent } from './components/production-plan-management/production-plan-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    DefaultPageComponent,
    ProductionPlanComponent,
    ProductionProcessComponent,
    CurrentStatesComponent,
    DispatchedWorkersRecordComponent,
    ReportRecordsComponent,
    QRTContentComponent,
    ProjectManagementComponent,
    ProductionPlanManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
