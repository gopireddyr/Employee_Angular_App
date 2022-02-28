import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {employee} from './employee'
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
private baseurl ="";
  constructor(private httpClient: HttpClient) { }

  getEmployeesList():Observable<employee[]>
  {
    this.baseurl="http://localhost:8080/Employeelist/employees";
    return this.httpClient.get<employee[]>(`${this.baseurl}`);
  }

  getEmployee(id:number):Observable<employee>
  {
    this.baseurl="http://localhost:8080/Employeelist/employee/"+id;
    return this.httpClient.get<employee>(`${this.baseurl}`);
  }
  
  addEmployee(emp:employee):any
  {
    this.baseurl="http://localhost:8080/Employeelist/Addemp";
    return this.httpClient.post(`${this.baseurl}`, emp);
  }
  updateEmployee(emp:employee):any
  {
    this.baseurl="http://localhost:8080/Employeelist/updateEmp";
    return this.httpClient.put(`${this.baseurl}`, emp);
  }
  deleteEmployee(id:number):Observable<boolean>
  {
    this.baseurl="http://localhost:8080/Employeelist/deleteEmp/"+id;
    return this.httpClient.delete<boolean>(`${this.baseurl}`); 

  }
}