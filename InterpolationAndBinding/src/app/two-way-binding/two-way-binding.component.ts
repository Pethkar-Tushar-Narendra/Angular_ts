import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css',
})
export class TwoWayBindingComponent {
  title = 'Angular Data Binding Example';
  user = {
    name: 'Alice',
    age: 25,
  };
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  name = 'Alice';

  onClick() {
    alert('Button clicked!');
  }
}
