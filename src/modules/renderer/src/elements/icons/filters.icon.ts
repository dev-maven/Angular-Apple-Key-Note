import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'peb-icon-filters',
  template: `
    <svg width="100%" height="100%" viewBox="0 0 13 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill-rule="nonzero">
                <rect fill="#666666" x="0" y="0" width="2" height="2"></rect>
                <rect fill="#666666" x="0" y="4" width="2" height="2"></rect>
                <rect fill="#666666" x="0" y="8" width="2" height="2"></rect>
                <rect fill="#666666" x="0" y="8" width="2" height="2"></rect>
                <path d="M4,1 L13,1" stroke="#666666"></path>
                <path d="M4,5 L13,5" stroke="#666666"></path>
                <path d="M4,9 L13,9" stroke="#666666"></path>
            </g>
        </g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PebFiltersIcon {

}
