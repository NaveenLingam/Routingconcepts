import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserServiceService } from "../user-service.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { User } from "../user.model"
import { DataService } from '../../sharedservice/DataService.component'
import { PerformService } from "../perform.service";
import { Car } from "../car.model"

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserServiceService,
    private dataService: DataService,private performService: PerformService) { }

  addForm: FormGroup;

  user = {
    id: 0,
    name: "",
    age: 0,
    email: ""
  }

  ngOnInit() {

console.log(this.performService.service)

  }

  createStudent() {
    this.router.navigate(['/login']);
  }

}