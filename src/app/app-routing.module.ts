import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DefaultPageComponent} from './components/default-page/default-page.component'

import {ProductionPlanComponent} from './components/production-plan/production-plan.component'
import { ProjectManagementComponent } from './components/project-management/project-management.component';


const routes: Routes = [{
  path:'projectManagement',component:ProjectManagementComponent
},{
  path:'index',component:DefaultPageComponent
},{
  path:'productionPlan',component:ProductionPlanComponent
},{
  path:'**',component:DefaultPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


// const routes: Routes = [
//   {
//     path:'header',component:HeaderComponent
//   },
//   {
//     path:'productionManagment',component:ProductionManagmentComponent
//   },
//   {path:'**',component:DefaultPageComponent}
// ];


export class AppRoutingModule { }
