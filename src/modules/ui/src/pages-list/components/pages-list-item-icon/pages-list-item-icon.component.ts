import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PebPageVariant } from '@pe/builder-core';

@Component({
  selector: 'peb-ui-pages-list-item-icon',
  templateUrl: 'pages-list-item-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    ':host { display: flex; align-items: center; justify-content: center; }'
  ]
})
export class PebPagesSidebarItemIconComponent {
  @Input()
  variant: PebPageVariant;

  @Input()
  default: boolean;

  PebPageVariant = PebPageVariant;
}
