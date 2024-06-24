import { Component } from '@angular/core';
import { EmplyeesService } from '../emplyees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.css',
})
export class EmployeeRegistrationComponent {
  constructor(
    private _emplyeesService: EmplyeesService,
    private router: Router
  ) {}
  firstName: string = '';
  lastName: string = '';
  age: string = '';
  address: string = '';
  gender: 'male' | 'female' | null = null;
  phone: string = '';
  errorMessage: string = '';
  onSubmit() {
    const obj = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age.toString(),
      address: this.address,
      gender: this.gender,
      phone: this.phone.toString(),
    };
    this._emplyeesService.createPost(obj).subscribe({
      next: (v) => {
        this.router.navigate(['/']);
      },
      error: (e) => (this.errorMessage = e.message),
      complete: () => console.info('complete'),
    });
    console.log('paragraph', obj);
  }
  onReset() {
    this.firstName = '';
    this.lastName = '';
    this.age = '';
    this.address = '';
    this.gender = null;
    this.phone = '';
    this.address = '';
  }
}
