import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class DataService {

    private StudentInfo = new BehaviorSubject<any>({});
    currentStudentInfo = this.StudentInfo.asObservable();
    setStudentInfo(details: any) {
        this.StudentInfo.next(details);
    }
}