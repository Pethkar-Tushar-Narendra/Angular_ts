import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css',
})
export class ParentComponentComponent {
  message: string = '';
  parentMessage = 'Message from parent';
  receiveMessage($event: any) {
    this.message = $event;
  }
}
