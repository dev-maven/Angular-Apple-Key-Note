import { Component } from '@angular/core';

@Component({
  selector: 'peb-editor-products-sidebar',
  templateUrl: 'products.sidebar.html',
  styleUrls: ['./products.sidebar.scss'],
})
export class PebEditorProductsSidebarComponent {
  columns = 3;
  rows = 2;

  changeColumns(columns): void {
  }

  changeRows(rows): void {
  }
}
