import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _emplyeesService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute
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

  onSubmit() {
    if (this.form.valid) {
      this._emplyeesService
        .updatePost(this.id || '0', { ...this.form.value })
        .subscribe({
          next: (v) => {
            this.router.navigate(['/']);
          },
          error: (e) => (this.errorMessage = e.message),
          complete: () => console.info('complete'),
        });
    } else {
      console.log('Form is invalid');
    }
  }
  id: string = '';
  errorMessage: string = '';
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') ?? '0';
    });
    this._emplyeesService.getPost(this.id || '0').subscribe({
      next: (user) => {
        this.form.setValue({
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age.toString(),
          address: user.address.address,
          gender: user.gender,
          phone: user.phone,
        });
      },
      error: (e) => (this.errorMessage = e.message),
      complete: () => console.info('complete'),
    });
  }
  onBack() {
    this.router.navigate(['/']);
  }
  onDelete() {
    this._emplyeesService.deletePost(this.id || '0').subscribe({
      next: (v: any) => {
        this.router.navigate(['/']);
      },
      error: (e: any) => (this.errorMessage = e.message),
      complete: () => console.info('complete'),
    });
  }
}
