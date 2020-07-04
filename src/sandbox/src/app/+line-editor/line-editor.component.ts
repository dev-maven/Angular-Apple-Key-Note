import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { merge, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { map, takeUntil, tap } from 'rxjs/operators';
// import { PebMediaSidebarCollectionItem } from '../shared/interfaces/media-sidebar.interfaces';
import { LineEditorService } from './line-editor.service';

interface LineElementInterface {
  id: string;
  type: 'line';
}

export const defaultLineSettings = {
  size: {
    width: 800,
    height: 500,
    saveProportions: false,
  },
  position: {
    x: 100,
    y: 100,
  }
};


@Component({
  selector: 'peb-line-editor-page',
  templateUrl: './line-editor.component.html',
  styleUrls: ['./line-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineEditorComponent implements OnInit, OnDestroy {

  lineElement$: Observable<LineElementInterface>;
  lineStyleSheet$: Observable<any>;
  destroy$: Subject<void> = new Subject();

  arrangeForm = new FormGroup({
    size: new FormGroup({
      width: new FormControl('0px'),
      height: new FormControl('0px'),
      saveProportions: new FormControl(false),
    }),
    position: new FormGroup({
      x: new FormControl(0),
      y: new FormControl(0)
    }),
  });

  styleForm = new FormGroup({
    stroke: new FormControl(true),
    shadow: new FormControl(true),
    weight: new FormControl('10'),
    blur: new FormControl('20'),
    offset: new FormControl('30'),
    shadowOpacity: new FormControl('40'),
    reflection: new FormControl('50'),
    opacity: new FormControl('80'),
  });

  ratio = 1;
  slidesTabSelected = true;

  get constraintProportionsInput() {
    return this.arrangeForm.get('size').get('saveProportions');
  }

  get widthInput() {
    return this.arrangeForm.get('size').get('width');
  }

  get heightInput() {
    return this.arrangeForm.get('size').get('height');
  }

  constructor(private editorService: LineEditorService) {}

  ngOnInit(): void {

    this.constraintProportionsInput.valueChanges
      .pipe(
        tap(() => {
          const form = this.arrangeForm.getRawValue();
          this.ratio = form.size.width / form.size.height;
        }),
        takeUntil(this.destroy$),
      ).subscribe();

    this.widthInput.valueChanges
      .pipe(
        tap(width => {
          if (this.constraintProportionsInput.value) {
            this.heightInput.patchValue((width / this.ratio).toFixed(2), {emitEvent: false});
          }
        }),
        takeUntil(this.destroy$),
      ).subscribe();

    this.heightInput.valueChanges
      .pipe(
        tap(height => {
          if (this.constraintProportionsInput.value) {
            this.widthInput.patchValue((height * this.ratio).toFixed(2), {emitEvent: false});
          }
        }),
        takeUntil(this.destroy$),
      ).subscribe();

    this.lineStyleSheet$ = merge(this.arrangeForm.valueChanges, of(defaultLineSettings)).pipe(
      map((formValue) => {
        return {
          line: {
            width: formValue.size.width,
            height: formValue.size.height,
            top: formValue.position.y,
            left: formValue.position.x,
          }
        };
      }),
    );

    this.arrangeForm.setValue(defaultLineSettings);

  }

  ngOnDestroy(): void {

  }

}
