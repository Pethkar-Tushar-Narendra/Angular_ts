import { Component } from '@angular/core';
import { EmplyeesService } from '../emplyees.service';

@Component({
  selector: 'app-registered-employees',
  templateUrl: './registered-employees.component.html',
  styleUrl: './registered-employees.component.css',
})
export class RegisteredEmployeesComponent {
  constructor(private _emplyeesService: EmplyeesService) {}
  ngOnInit() {
    this.getPosts();
  }
  // Function to format item
  formatItem(item: any): string {
    return `ID: ${item.userId}, Name: ${item.id}, Description: ${item.title}, Description: ${item.body}`;
  }

  employees: {
    employeeId: number;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    gender: 'male' | 'female';
    phone: number;
  }[] = [];
  post: any = {};
  errorMessage: string = '';

  getPosts(): void {
    this._emplyeesService.getPosts().subscribe({
      next: (v) =>
        (this.employees = v.users.map((user: any) => ({
          employeeId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age.toString(),
          address: user.address.address,
          gender: user.gender,
          phone: user.phone,
        }))),
      error: (e) => (this.errorMessage = e.message),
      complete: () => console.info('complete'),
    });
  }
}
