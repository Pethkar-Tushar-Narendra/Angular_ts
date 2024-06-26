import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildWithIdComponent } from './child-with-id/child-with-id.component';
import { ChildOfchildWithIdComponent } from './child-ofchild-with-id/child-ofchild-with-id.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, UserComponent, UserDetailsComponent, UsersComponent, ParentComponent, ChildComponent, ChildWithIdComponent, ChildOfchildWithIdComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
