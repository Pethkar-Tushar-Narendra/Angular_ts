import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css',
})
export class ChildComponentComponent {
  @Output() messageEvent = new EventEmitter<string>();
  @Input() childMessage: string = '';

  sendMessage() {
    this.messageEvent.emit('Message from child');
  }
}
