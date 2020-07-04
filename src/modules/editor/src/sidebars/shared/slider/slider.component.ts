import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, merge, of } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

import { AbstractComponent } from '@pe/builder-core';

@Component({
  selector: 'peb-editor-sidebar-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class PebEditorSliderComponent extends AbstractComponent implements OnInit {
  @Input() control: FormControl;
  @Input() min = 0;
  @Input() max = 100;
  @Input() unit: string;

  inputSubject$ = new Subject<any>();

  ngOnInit() {
    merge(
      this.inputSubject$.pipe(map((event: Event) => (event.target as HTMLInputElement).value )),
      of(this.control.value)
    ).pipe(
      tap((value: number) => {
        this.control.patchValue(value);
      }),
      takeUntil(this.destroyed$)
    )
    .subscribe();
  }

  get width(): number {
    return Math.min(this.max, this.control.value) / this.max * 100;
  }
}
