import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'peb-icon-plus',
  template: `
    <svg width="7px" height="7px" viewBox="0 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
        <g transform="translate(-188.000000, -547.000000)" stroke="#979797">
          <g transform="translate(189.000000, 548.000000)">
            <line x1="2.5" y1="0" x2="2.5" y2="5" id="Line-3"></line>
            <line x1="2.5" y1="0" x2="2.5" y2="5" id="Line-3"
              transform="translate(2.500000, 2.500000) rotate(-270.000000) translate(-2.500000, -2.500000) "></line>
          </g>
        </g>
      </g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PebPlusIcon {

}
