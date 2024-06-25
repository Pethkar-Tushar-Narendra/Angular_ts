import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'user',
    component: UsersComponent,
    children: [
      { path: 'details', component: UserDetailsComponent },
      {
        path: ':id',
        component: UserComponent,
        children: [{ path: 'details', component: UserDetailsComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
