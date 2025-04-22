import {Component, OnInit} from '@angular/core';
import {Employees} from '../employees';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: false,
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {

  id: number=0
  employee!: Employees;
  constructor(private route: ActivatedRoute,
              private employeeService: EmployeeService) {
  }

  ngOnInit ():void{
    this.id=this.route.snapshot.params['id']

    this.employee = new Employees();
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
    });

  }

}


