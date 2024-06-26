import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-ofchild-with-id',
  templateUrl: './child-ofchild-with-id.component.html',
  styleUrl: './child-ofchild-with-id.component.css',
})
export class ChildOfchildWithIdComponent {
  id: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe((params: any) => {
      this.id = params.get('id') ?? '';
    });
  }

  navigateToOtherChild() {
    this.router.navigate(['user', '123', 'details']);
  }
}
