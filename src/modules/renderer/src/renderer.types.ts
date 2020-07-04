import { PebScreen } from '@pe/builder-core';

export interface PebRendererOptions {
  screen: PebScreen;
  scale: number;
  locale: string;
}

// TODO: Find a proper place to store it
export interface Product {
  id: string;
  image: string;
  categories: string[];
  title: string;
  prices: {
    regular: number;
    sale: number;
  };
}
