import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildWithIdComponent } from './child-with-id/child-with-id.component';
import { ChildOfchildWithIdComponent } from './child-ofchild-with-id/child-ofchild-with-id.component';

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
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      { path: 'details', component: ChildComponent },
      {
        path: ':id',
        component: ChildWithIdComponent,
        children: [{ path: 'details', component: ChildOfchildWithIdComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
