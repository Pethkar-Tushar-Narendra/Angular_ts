import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData() {
    return [
      { itemId: 1, itemName: 'item 1' },
      { itemId: 2, itemName: 'item 2' },
      { itemId: 3, itemName: 'item 3' },
      { itemId: 4, itemName: 'item 4' },
    ];
  }
}
