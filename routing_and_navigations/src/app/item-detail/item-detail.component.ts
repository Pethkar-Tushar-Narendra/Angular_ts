import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css',
})
export class ItemDetailComponent {
  itemId: string = '0';
  itemType: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get('id') ?? '0';
    });
    this.route.queryParamMap.subscribe((params) => {
      this.itemType = params.get('type');
    });
  }
  onButtonClick() {
    this.router.navigate(['/item', this.itemId + 1], {
      queryParams: {
        type: 'something different',
      },
    });
  }
}
