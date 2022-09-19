import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees() {
    return [
      { "id": 1, "name": "Andrew", "age": 30 },
      { "id": 2, "name": "Brandon", "age": 25 },
      { "id": 3, "name": "Christina", "age": 26 },
      { "id": 4, "name": "Elena", "age": 28 },
      { "id": 5, "name": "pranav", "age": 1}
    ];
  }

  constructor() { }
}
