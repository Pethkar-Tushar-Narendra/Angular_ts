import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-with-id',
  templateUrl: './child-with-id.component.html',
  styleUrl: './child-with-id.component.css',
})
export class ChildWithIdComponent {
  id: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') ?? '';
    });
  }
}
