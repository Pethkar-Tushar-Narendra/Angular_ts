import { Component } from '@angular/core';
import { EmplyeesService } from '../emplyees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent {
  firstName: string = '';
  lastName: string = '';
  age: string = '';
  address: string = '';
  gender: 'male' | 'female' | null = null;
  phone: string = '';
  id: string = '';
  errorMessage: string = '';
  constructor(
    private _emplyeesService: EmplyeesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') ?? '0';
    });
    this._emplyeesService.getPost(this.id || '0').subscribe({
      next: (user) => {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.age = user.age.toString();
        this.address = user.address.address;
        this.gender = user.gender;
        this.phone = user.phone;
      },
      error: (e) => (this.errorMessage = e.message),
      complete: () => console.info('complete'),
    });
  }
  onSubmit() {
    const obj = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age.toString(),
      address: this.address,
      gender: this.gender,
      phone: this.phone.toString(),
    };
    this._emplyeesService.updatePost(this.id || '0', obj).subscribe({
      next: (v) => {
        this.router.navigate(['/']);
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
      next: (v) => {
        this.router.navigate(['/']);
      },
      error: (e) => (this.errorMessage = e.message),
      complete: () => console.info('complete'),
    });
  }
}
