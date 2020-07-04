import { PebPageVariant } from '@pe/builder-core';

export interface PebPageToolabrData {
  name?: string;
  default?: boolean;
  variant?: PebPageVariant;
}

export interface PebProductPageToolbar {
  styles?: {
    width?: number;
    height?: number;
  };
}
