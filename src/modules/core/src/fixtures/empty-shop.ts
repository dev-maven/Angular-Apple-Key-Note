import { PebScreen } from '../constants';
import { PebPage, PebPageType, PebPageVariant, PebShop, PebTemplate } from '../models/client';
import { PebElementType } from '../models/element';
import { pebGenerateId } from '../utils/generate-id';
import { random } from 'lodash-es';

export const pebCreateEmptyPage = (name, type: PebPageType = PebPageType.Replica, variant = PebPageVariant.Default): PebPage => {

  const line = {
    id: pebGenerateId(),
    type: PebElementType.Line,
  };

  const template: PebTemplate = {
    id: pebGenerateId(),
    type: PebElementType.Document,
    children: [
      ...['header', 'body', 'footer'].map(sectionName => ({
      id: pebGenerateId('element'),
      type: PebElementType.Section,
      data: { name: sectionName },
      meta: { deletable: false },
      children: [
        ...(sectionName === 'header' ? [
          {
            id: pebGenerateId('element'),
            type: PebElementType.Block,
            children: [
              {
                id: pebGenerateId('element'),
                type: PebElementType.Text,
                data: {
                  text: name,
                },
              },
            ],
          },
        ] : []),
      ],
    })),
      line,
    ],
  };

  const [headerId, bodyId, footerId] = template.children.map(el => el.id);
  const headerBlockId = template.children[0].children[0].id;
  const blockColor = '#' + Number(random(0, 16 ** 6)).toString(16);

  return  {
    id: pebGenerateId('page'),
    name,
    type,
    variant,
    master: null,
    data: {
      url: '/',
      mark: null,
    },
    template,
    stylesheets: {
      [PebScreen.Desktop]: {
        [headerId]: { height: 200 },
        [bodyId]: { height: 600 },
        [footerId]: { height: 200 },
        [headerBlockId]: {
          height: 150,
          width: 150,
          backgroundColor: blockColor,
        },
        [line.id]: {height: 2},
      },
      [PebScreen.Tablet]: {
        [headerId]: { height: 200 },
        [bodyId]: { height: 600 },
        [footerId]: { height: 200 },
        [headerBlockId]: {
          height: 150,
          width: 150,
          backgroundColor: blockColor,
        },
        [line.id]: {height: 2},
      },
      [PebScreen.Mobile]: {
        [headerId]: { height: 200 },
        [bodyId]: { height: 600 },
        [footerId]: { height: 200 },
        [headerBlockId]: {
          height: 150,
          width: 150,
          backgroundColor: blockColor,
        },
        [line.id]: {height: 2},
      },
    },
    context: {},
  };
};

export function pebCreateEmptyShop(): PebShop {
  const frontPage = pebCreateEmptyPage('Front');

  return {
    id: pebGenerateId(),
    data: {
      frontPageId: frontPage.id,
    },
    routing: {
      '/': frontPage.id,
    },
    context: {},
    pages: [frontPage],
  };
}
