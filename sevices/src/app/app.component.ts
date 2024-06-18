import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'sevices';
  constructor(private loggingService: DataService) {
    console.log(this.loggingService.getData(), 'data of services');
  }
  ngOnInit() {
    // Use the services
    console.log(this.loggingService.getData(), 'data of services');
  }
}
