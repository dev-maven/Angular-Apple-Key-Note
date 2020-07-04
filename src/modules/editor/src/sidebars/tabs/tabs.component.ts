import { PebEditorTabComponent } from './tab.component';
import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'peb-editor-sidebar-tabs',
  template: `
    <div class="tabs">
      <div class="tab" *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        {{ tab.title }}
      </div>
    </div>
    <ng-content></ng-content>
  `,
  styles: [`
    .tabs {
      display: flex;
    }

    .tab {
      width: 100%;
      text-align: center;
      font-size: 1em;
      padding: 0.5em;
      cursor: pointer;
      border-top: 1px solid #696c70;
      border-bottom: 1px solid #696c70;
      transition: background-color .2s;
    }

    .tab:nth-child(even) {
      border-left: 1px solid #696c70;
      border-right: 1px solid #696c70;
    }

    .tab:hover:not(.active) {
      background-color: #424242;
    }

    .active {
      background-color: #145ccc;
      border-bottom-color: #145ccc;
    }
  `]
})
export class PebEditorTabsComponent implements AfterContentInit {

  @ContentChildren(PebEditorTabComponent) tabs: QueryList<PebEditorTabComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: any): void {
    this.tabs.toArray().forEach((tab: any) => tab.active = false);
    tab.active = true;
  }
}
