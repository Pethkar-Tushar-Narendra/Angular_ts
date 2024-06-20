import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Interpolation Example';
  user = {
    name: 'Jane Smith',
    age: 28,
  };
  a = 5;
  b = 10;

  htmlString = '<script>alert("Hello!")</script>';

  getGreeting(): string {
    return `Hello, ${this.user.name}!`;
  }
}
