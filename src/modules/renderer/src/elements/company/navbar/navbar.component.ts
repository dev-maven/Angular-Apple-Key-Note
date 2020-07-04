import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { PebAbstractElement } from '../../_abstract/abstract.element';
import { PebRendererOptions } from '../../../renderer.types';
import { PebElement, PebElementStyles } from '@pe/builder-core';

@Component({
  selector: 'peb-element-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PebNavbarElement extends PebAbstractElement implements AfterViewInit {
  @Input() element: PebElement;
  @Input() styles: PebElementStyles;
  @Input() options: PebRendererOptions;
  @ViewChild('wrapper') wrapper: ElementRef;
  @ViewChild('mobileButtonWrapper') mobileButtonWrapper: ElementRef;
  @ViewChild('mobileButton') mobileButton: ElementRef;
  @ViewChildren('mobileButtonLine') mobileButtonLines: QueryList<ElementRef>;

  get elements(): { [key: string]: HTMLElement | HTMLElement[] } {
    return {
      host: this.nativeElement,
      wrapper: this.wrapper ? this.wrapper.nativeElement : null,
      mobileButtonWrapper: this.mobileButtonWrapper ? this.mobileButtonWrapper.nativeElement : null,
      mobileButton: this.mobileButton ? this.mobileButton.nativeElement : null,
      mobileButtonLine: this.mobileButtonLines
        ? this.mobileButtonLines.toArray().map(a => a.nativeElement)
        : [],
    };
  }

  get mappedStyles() {
    return {
      host: {
        color: this.styles.color,
        background: this.styles.background,
        fontSize: this.styles.fontSize + 'px',
      },
      wrapper: {
        height: this.styles.height + 'px',
      },
      mobileButtonWrapper: {
        width: this.styles.mobileButtonWidth + 'px',
      },
      mobileButton: {
        height: this.styles.mobileButtonHeight + 'px',
      },
      mobileButtonLine: {
        height: this.styles.mobileButtonElementHeight + 'px',
        backgroundColor: this.styles.mobileButtonElementColor,
      }
    };
  }

  openMobileMenu() {
    this.interact({
      type: 'navigation.showMobileMenu',
      routes: this.element.data.routes,
    });
  }

  redirectTo(url: string) {
    this.interact({type: 'navigate', url});
  }

  showDropdown(element, route: any) {
    this.interact({
      type: 'navigation.showDropdown',
      route,
      element,
    });
  }

  ngAfterViewInit() {
    this.applyStyles();
  }
}
