import { Inject, Injectable } from '@angular/core';
import { MOCK_DATA, MockData } from '../../app/data.factory';
import { of } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';
import { random } from 'lodash-es';

@Injectable()
export class CompanyService {
  options = {
    delay: {
      min: 500,
      max: 1500,
    }
  };

  constructor(
    @Inject(MOCK_DATA) private data: MockData,
  ) {}

  //
  //  Exposed methods
  //
  getGeneralInfo() {
    return of({
      state: 'ready',
      data: {
        name: 'Fruit shop',
        logoUrl: 'https://www.apple.com/ac/globalnav/5/en_US/images/globalnav/apple/image_large.svg',
        createdAt: 2019,
      }
    }).pipe(
      delay(random(this.options.delay.min, this.options.delay.max)),
      startWith({
        state: 'loading',
        data: null,
      }),
    );
  }

  getSocialAccounts() {
    return of({
      twitter: 'fruit_shop',
      instagram: 'fruit_shop',
    }).pipe(
      delay(random(this.options.delay.min, this.options.delay.max)),
      startWith({
        state: 'loading',
        data: null,
      }),
    );;
  }
}
