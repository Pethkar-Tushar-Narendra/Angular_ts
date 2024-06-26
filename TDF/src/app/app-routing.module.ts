import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdfFormComponent } from './tdf-form/tdf-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/tdfForm', pathMatch: 'full' },
  { path: 'tdfForm', component: TdfFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
