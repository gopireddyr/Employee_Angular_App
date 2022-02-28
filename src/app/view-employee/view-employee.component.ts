import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employee:any;
  key:any;
  constructor(private EmployeeService:EmployeeServiceService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>this.key=params.get("id"));
    this.EmployeeService.getEmployee(this.key).subscribe(data=>{ this.employee=data;});
  }
Back():void
{
  this.router.navigate(['/']);
}

}
