import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
  OnInit,
  HostListener
} from '@angular/core';

import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebElement, PebStyles } from '../../../core.types';
import { PebRendererOptions } from '../../../renderer.types';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
// import { LineStyles } from './line.constants';

@Component({
  selector: 'peb-element-line',
  templateUrl: './line.element.html',
  styleUrls: ['../../_abstract/abstract.element.scss',
  './line.element.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PebLineElement extends PebAbstractElement implements OnInit, AfterViewInit {

  @Input() element: PebElement;
  @Input() styles: PebStyles;

  @Input() options: PebRendererOptions;


  get elements(): { [key: string]: HTMLElement } {
    return {
      host: this.nativeElement,
    };
  }


  get mappedStyles() {
    // const styles = this.styles as LineStyles;
    // const { scale } = this.options;

    return  {
      host: {
        position: 'relative',
        width: this.styles.width ? `${this.styles.width}px` : '60%',
        height: this.styles.height ? `${+this.styles.height}px`
          : '0.5px',
        backgroundColor: this.styles.backgroundColor ? this.styles.backgroundColor : 'black',
        color: this.styles.color ? this.styles.color : 'white',
        fontSize: this.styles.fontSize + 'px',
        margin: this.styles.margin ? this.styles.margin : '5rem',
        boxShadow: this.styles.boxShadow ? this.styles.boxShadow : null,
        opacity: this.styles.opacity ? this.styles.opacity : null,
        transform: this.styles.transform,
        top: this.styles.top,
        float: this.styles.float

      },
    };
  }

  ngOnInit() {
    console.log('I was called');

  }

  ngAfterViewInit() {
    this.applyStyles();
    this.renderChildren();
  }
        // el.addEventListener('click', this.displayFullDescription());


}
