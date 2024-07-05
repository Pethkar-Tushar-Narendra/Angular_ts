import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.css',
})
export class EmployeeRegistrationComponent {
  form: FormGroup;
  constructor(
    private _emplyeesService: EmployeesService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  errorMessage: string = '';
  onSubmit() {
    if (this.form.valid) {
      this._emplyeesService.createPost(this.form.value).subscribe({
        next: (v) => {
          this.router.navigate(['/']);
        },
        error: (e) => (this.errorMessage = e.message),
        complete: () => console.info('complete'),
      });
    } else {
      console.log(this.form.valid, this.form.value, 'this.form.valid');
    }
  }
  onReset() {
    this.form.setValue({
      firstName: '',
      lastName: '',
      age: '',
      address: '',
      gender: '',
      phone: '',
    });
  }
  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get age() {
    return this.form.get('age');
  }
  get address() {
    return this.form.get('address');
  }
  get gender() {
    return this.form.get('gender');
  }
  get phone() {
    return this.form.get('phone');
  }
}
