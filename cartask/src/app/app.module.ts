import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  CreatecarComponent } from './createcar/createcar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';

import { DataService } from 'src/sharedservice/DataService.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatecarComponent,
    StudentcreateComponent,
    LoginpageComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
   
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [    
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
