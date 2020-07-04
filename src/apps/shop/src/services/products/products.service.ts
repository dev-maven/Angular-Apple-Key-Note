import { Observable, of } from 'rxjs';
import { Product, PebProductElementContext } from './products.typings';
import { Inject, Injectable } from '@angular/core';
import { MOCK_DATA, MockData } from '../../app/data.factory';
import { delay, startWith } from 'rxjs/operators';
import { random } from 'lodash-es';

@Injectable()
export class MockProductsService {
  data: Product[];

  options = {
    delay: {
      min: 400,
      max: 800,
    }
  };

  constructor(@Inject(MOCK_DATA) data: MockData) {
    this.data = data.products;
  }

  // TODO: Add list of available method and validation schema for arguments

  //
  //  Available methods
  //
  getSingle(productId: string): Observable<PebProductElementContext> {
    const product = this.data.find(p => p.id === productId);

    return of(
      product
        ? { state: 'ready', data: product } as any // wtf??
        : { state: 'failed', data: null }
    ).pipe(
      delay(random(this.options.delay.min, this.options.delay.max)),
      startWith({
        state: 'loading',
        data: null,
      }),
    );
  }

  getListByIds(...productIds: string[]) {
    // TODO: Keep same order as in 'productIds'
    const products = this.data.filter(p => productIds.includes(p.id));

    return of({
      state: 'ready',
      data: products,
    }).pipe(
      delay(random(this.options.delay.min, this.options.delay.max)),
      startWith({
        state: 'loading',
        data: null,
      }),
    );
  }

  getListByCategory(category: string, options: { limit: number, offset: number }) {
    const products = this.data
      .filter(p => p.categories.includes(category))
      .slice(options.offset, options.limit);

    return of({
      state: 'ready',
      data: products,
    }).pipe(
      delay(random(this.options.delay.min, this.options.delay.max)),
      startWith({
        state: 'loading',
        data: null,
      }),
    );
  }
}
