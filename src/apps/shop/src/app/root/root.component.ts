import { Component, Inject } from '@angular/core';
import { MOCK_DATA, MockData } from '../data.factory';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../../../modules/renderer/src/renderer.types';

@Component({
  selector: 'peb-shop-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class ShopRootComponent {
  state$ = new BehaviorSubject<{
    '@search': string;
    '@cart': {
      count: number;
      product: Product;
    }[];
  }>({
    '@cart': [],
    '@search': '',
  });

  constructor(
    @Inject(MOCK_DATA) public data: MockData,
  ) {}
}
