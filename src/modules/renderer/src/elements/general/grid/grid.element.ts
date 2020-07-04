import { Component, Input, ViewChildren } from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebRendererChildrenSlotDirective } from '../../../selectors/children-slot.directive';
import { PebRendererOptions } from '../../../renderer.types';
import { PebElementStyles, PebElement } from '@pe/builder-core';

export interface GridStyles extends PebElementStyles {
  display: 'horizontal'|'vertical';
  cells: string;
  height?: number;
  gridGap: number;
}

@Component({
  selector: 'peb-element-grid',
  templateUrl: './grid.element.html',
  styleUrls: [
    '../../_abstract/abstract.element.scss',
    './grid.element.scss'
  ]
})
export class PebGridElement extends PebAbstractElement {
  @Input() element: PebElement;
  @Input() styles: GridStyles;

  @Input() options: PebRendererOptions;

  @ViewChildren(PebRendererChildrenSlotDirective) slots: PebRendererChildrenSlotDirective;

  get elements(): { [key: string]: HTMLElement} {
    return {
      host: this.nativeElement,
    };
  }

  get cells() {
    return this.styles.cells.split(' ').map(cdef => cdef.split(':').shift());
  }
  //
  // get cellStyle() {
  //   const direction = getScreenStyle((this.element.style as any).direction, this.options.screen);
  //   const items = getScreenStyle((this.element.style as any).items, this.options.screen);
  //
  //   if (direction === 'column') {
  //     return { height: 100 / items + '%' };
  //   } else if (direction === 'row') {
  //     return { width: 100 / items + '%' };
  //   } else {
  //     throw new Error('Renderer: unsupported direction in Grid element');
  //   }
  // }

  get mappedStyles() {
    const scale = this.options.scale;
    // const thisScreenStyle = (style) => getScreenStyle(style, screen);

    // TODO: Take into account scale
    const cellsDefToGridTemplate = (def) => def
      .split(' ')
      .map(cDef => cDef.split(':').pop())
      .join(' ');

    const transformMargin = (str) => ('' + str)
      .split(' ')
      .map(part => +part * scale + 'px')
      .join(' ');

    // TODO: Filter out nulls
    return {
      host: {
        display: 'grid',
        margin: this.styles.margin ? transformMargin(this.styles.margin) : null,
        gridTemplateColumns: this.styles.direction === 'horizontal'
          ? cellsDefToGridTemplate(this.styles.cells) : null,
        gridTemplateRows: this.styles.direction === 'vertical'
          ? cellsDefToGridTemplate(this.styles.cells) : null,
        gridGap: this.styles.gridGap
          ? this.styles.gridGap * scale + 'px'
          : null,
        // flexDirection: thisScreenStyle((style as any).direction),
        // background: style.background
        //   ? thisScreenStyle(style.background)
        //   : null,
        // // TODO: Use styling.utils to not repeat this definitions
        // width: style.width
        //   ? scale * thisScreenStyle(style.width) + 'px'
        //   : null,
        // height: style.height
        //   ? scale * thisScreenStyle(style.height) + 'px'
        //   : null,
        // top: style.top
        //   ? scale * thisScreenStyle(style.top) + 'px'
        //   : null,
        // left: style.left
        //   ? scale * thisScreenStyle(style.left) + 'px'
        //   : null,
      }
    };
  }
}
