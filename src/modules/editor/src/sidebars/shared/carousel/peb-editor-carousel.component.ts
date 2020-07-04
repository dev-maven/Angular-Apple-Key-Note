import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { chunk } from 'lodash-es';

@Component({
  selector: 'peb-editor-carousel',
  templateUrl: './peb-editor-carousel.component.html',
  styleUrls: ['./peb-editor-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PebEditorCarouselComponent {

  @Input()
  set images(val: string[]) {
    this.carouselData = chunk(val, this.elementsOnPage);
  }

  elementsOnPage = 6;

  @Output() selectElement: EventEmitter<string> = new EventEmitter<string>();

  carouselData: string[][];
  currentIndex = 0;

  constructor(private sanitizer: DomSanitizer) { }

  onSelect(value: string) {
    this.selectElement.emit(value);
  }

  getBackroundImage(url: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${url}')`);
  }
}
