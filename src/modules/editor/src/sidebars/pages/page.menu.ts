import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PebPage, PebPageType } from '../../../../core/src/models/client';

@Component({
  selector: 'peb-editor-page-menu',
  template: `
    <ul>
      <li
        [class.disabled]="page.type === PageType.Replica"
        (click)="page.type === PageType.Master && fork.emit(page.id)"
      >
        Fork
      </li>
      <li (click)="duplicate.emit()">Duplicate</li>
      <li (click)="delete.emit()">Delete</li>
    </ul>
  `,
  styles: [
    `
    :host {
      background: #eee;
      color: #323232;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      border: 1px solid #888;
    }

    li {
      padding: .75em;
      cursor: pointer;
    }

    li.disabled {
      color: #888;
      cursor: default;
    }

    li:hover:not(.disabled) {
      color: white;
      background: #67696c;
    }
    `
  ]
})
export class EditorPageMenu {
  PageType = PebPageType;

  @Input() page: any;

  @Output() fork = new EventEmitter<any>();
  @Output() duplicate = new EventEmitter();
  @Output() delete = new EventEmitter();
}
