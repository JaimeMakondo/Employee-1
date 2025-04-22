import {Component, OnInit} from '@angular/core';
import {Employees} from '../employees';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})


export class EmployeeListComponent implements OnInit {
  employees: Employees[] = [];

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit():void{
    this.getEmployees();

}
private getEmployees() : void{
    this.employeeService.getEmployeesList().subscribe( data => {
      this.employees = data;
    })
  }
  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id])
  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id])

  }

  deleteEmployee(id: number) {
  this.employeeService.deleteEmployee(id).subscribe(data=>{
    console.log(data);
    this.getEmployees();
  })
  }

}
