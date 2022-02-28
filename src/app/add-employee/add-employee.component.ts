import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private EmployeeService: EmployeeServiceService, private router: Router,private route: ActivatedRoute) { }
  employee: employee = new employee();
  added: any;
  id:any;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>this.id=params.get("id"));
    if(this.id!=null)
    {
      this.EmployeeService.getEmployee(this.id).subscribe(data=>{ this.employee=data;});
    }
  }
  NavigaeToEmployee() {
    this.router.navigate(['/']);
  }
  
  async onSubmit(){
    if(this.id!=null)
    {
      const res:any =await this.EmployeeService.updateEmployee(this.employee).toPromise();
      this.added=res.data;
      console.log(this.employee);
      this.NavigaeToEmployee();
    }
    else
    {
    const res:any =await this.EmployeeService.addEmployee(this.employee).toPromise();
    this.added=res.data;
    console.log(this.employee);
    this.NavigaeToEmployee();
  }
  }

  

}
