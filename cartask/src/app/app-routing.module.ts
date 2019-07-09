import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  CreatecarComponent } from './createcar/createcar.component';
import { from } from 'rxjs';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    component: CreatecarComponent
  }, {
    path:'student',
    component: StudentcreateComponent
  },{
    path:'login',
    component: LoginpageComponent
  },{
    path:'dashboard',
    component:DashboardComponent
  }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
