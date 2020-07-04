import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { parse as parseYml} from 'yaml';
import { Product } from '../services/products/products.typings';
import { ContextSchema } from './context.service';

export interface MockData {
  company: any;
  products: Product[];
  shipments: any;
}

// TODO: Remove this
export type UniqueId = string;

export interface PebShop {
  id: string;
  context: ContextSchema;
  pages: {
    url: string;
    mark: any;
    layout: UniqueId;
    styling: UniqueId;
    context: ContextSchema;
  }[];
}

export const MOCK_SOURCE = new InjectionToken<string>('MockSource');

export const MOCK_DATA = new InjectionToken<MockData>('MockData');

export const MOCK_SHOP = new InjectionToken<PebShop>('MockShop');

export const mockFiller = (
  source: string,
  themeStorage: PebShop,
  data: MockData,
  http: HttpClient,
) => {
  const fetchYml = (path) => http.get(`${source}/${path}.yml`, { responseType: 'text' }).pipe(
    map(yml => parseYml(yml) as any)
  );

  return () => combineLatest([
    fetchYml('index'),
    ...['company', 'products', 'shipments'].map(enName =>
      fetchYml(`/data/${enName}`)
    )
  ]).pipe(
    tap(([theme, dataCompany, dataProducts, dataShipments]) => {
      Object.assign(themeStorage, theme);

      data.company = dataCompany;
      data.products = dataProducts;
      data.shipments = dataShipments;
    })
  ).toPromise();
};
