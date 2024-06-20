import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'routing_and_navigations';
  navigationHandler() {
    this.router.navigate(['/item/10'], {
      queryParams: { type: 'unique' },
    });
  }
}
