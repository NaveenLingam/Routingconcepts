import { Component, OnInit } from '@angular/core';
import { PerformService } from "../perform.service";
import { Router } from "@angular/router";
import { Login } from '../login.model';
import {DataService} from  '../../sharedservice/DataService.component'


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private router: Router,private performService: PerformService,private dataService:DataService) { }
  login: Login={
    username:" ",
    password:0
  }

  ngOnInit() {
    this.dataService.currentStudentInfo.subscribe(data=>{
      console.log(data)
  })
}
  addLogin(){
    this.performService.createLogin(this.login)
      .subscribe(data => {
        this.dataService.setStudentInfo(data)
        this.router.navigate(['/dashboard']);
      });
  
    }
  }