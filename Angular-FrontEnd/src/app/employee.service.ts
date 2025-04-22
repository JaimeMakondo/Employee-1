
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';
import {Employees} from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) {
  }

  getEmployeesList(): Observable<Employees[]> {
    return this.httpClient.get<Employees[]>(`${this.baseUrl}`);

  }

  createEmployee(employee: Employees): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(id: number): Observable<Employees> {
    return this.httpClient.get<Employees>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employees): Observable<object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
