import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { RegisteredEmployeesComponent } from './registered-employees/registered-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './employees.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    PageNotFoundComponent,
    EmployeeRegistrationComponent,
    RegisteredEmployeesComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
