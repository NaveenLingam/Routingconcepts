import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PerformService } from "../perform.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { Car } from "../car.model"
import {DataService} from  '../../sharedservice/DataService.component'
@Component({
  selector: 'app-createcar',
  templateUrl: './createcar.component.html',
  styleUrls: ['./createcar.component.css']
})
export class CreatecarComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private performService: PerformService) { }

  addForm: FormGroup;

   car: Car= {
    id: 0,
    brand: "",
    color: "",
    price: 0
    
  }


  ngOnInit() { 
    
    }
  
  
  addCar(){
    
    this.performService.service=this.car;
      // .subscribe(data => {
      //   this.dataService.setStudentInfo(data)
        this.router.navigate(['/student']);
      };
  

}
  


