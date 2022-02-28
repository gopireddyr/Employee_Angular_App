import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from '../employee';
import {EmployeeServiceService} from '../employee-service.service'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: employee[];
   
  constructor(private EmployeeService:EmployeeServiceService,private router:Router) { }

  ngOnInit(): void {
    this.EmployeeService.getEmployeesList().subscribe(data=>{ this.employee=data;});
  }

  deleteEmp(id:number) :void
  {
    this.EmployeeService.deleteEmployee(id).subscribe();
    this.router.navigate(['/']);
  }

  vieweEmp(id:number) :void
  {
    this.router.navigate(['/view'],{ queryParams: { id: id}});
  }
  
  updateEmp(id:number) :void
  {
    this.router.navigate(['/addemployee'],{ queryParams: { id: id}});
  }
}
