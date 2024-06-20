import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css',
})
export class ItemDetailComponent {
  itemId: string | null = null;
  itemType: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.route.queryParamMap.subscribe((params) => {
      this.itemType = params.get('type');
    });
  }
}
