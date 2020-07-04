import { PebPageShort, PebPageType } from '@pe/builder-core';

export interface PagesLists {
  [PebPageType.Master]: PebPageShort[];
  [PebPageType.Replica]: PebPageShort[];
}
