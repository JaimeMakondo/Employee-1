import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employees} from '../employees';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{

  id:number=0;
  employee: Employees = new Employees();
  constructor(private employeeService: EmployeeService,
              private route:ActivatedRoute,
              private router: Router)
  {

  }

  ngOnInit():void{
    this.id=this.route.snapshot.params['id']

    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
    },error => console.log(error));
  }


  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data=>{
      this.goToEmployeeList();
    }, error => console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
