import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { RegisteredEmployeesComponent } from './registered-employees/registered-employees.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: RegisteredEmployeesComponent },
  { path: 'users/:id', component: EmployeeDetailsComponent },
  { path: 'add', component: EmployeeRegistrationComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
