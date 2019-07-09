import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Car} from "./car.model";
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class PerformService {

  service={}

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3001/cartaskdb/insert';

  getCar() {
    return this.http.get<Car[]>(this.baseUrl);
  }

  getCarById(id: number) {
    return this.http.get<Car>(this.baseUrl + '/' + id);
  }

  createCar(user: Car) {
    return this.http.post(this.baseUrl, user);
  }

  updateCar(user: Car) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteCar(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  createLogin(user: Login){
    return this.http.post(this.baseUrl,user);
  }
}

