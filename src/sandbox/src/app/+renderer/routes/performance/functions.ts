import { PebElement, PebStylesheet } from '@pe/builder-core';

export interface PebRenderModel {
  element: PebElement | any;
  stylesheet: PebStylesheet;
  context: any;
}

export const generateChessBoard = (cols, rows) => {

  const children = [];

  for (let i = 0; i < rows; i++) {
    const sectionChild = [];
    for (let j = 0; j < cols; j++) {
      sectionChild.push({
        id: `gb-block-${i}-${j}`,
        type: 'block',
      });
    }

    children.push({
      id: `gb-section-${i}`,
      type: 'section',
      children: sectionChild,
    });

  }

  const jumperContent: PebRenderModel = {
    element: {
      id: 'gb-doc-1',
      type: 'document',
      children,
    },
    stylesheet: {
      all: {}
    },
    context: {}
  };

  return jumperContent;

};
