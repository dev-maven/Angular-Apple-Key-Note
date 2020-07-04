import { PebElementContext } from '@pe/builder-core';

export interface Product {
  id: string;
  images: string[];
  categories: string[];
  title: string;
  prices: {
    regular: number;
    sale: number;
  };
}

export type PebProductElementContext = PebElementContext<Product>;
