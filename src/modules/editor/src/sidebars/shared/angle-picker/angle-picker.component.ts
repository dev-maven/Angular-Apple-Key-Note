import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { takeUntil, tap, switchMap, filter } from 'rxjs/operators';
import { AbstractComponent } from 'src/modules/core/src';

@Component({
  selector: 'peb-editor-sidebar-angle-picker',
  templateUrl: 'angle-picker.component.html',
  styleUrls: ['./angle-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebEditorAnglePickerComponent extends AbstractComponent implements OnInit {
  @Input() control: FormControl;

  @ViewChild('circle') circle: ElementRef;

  circleCenterX = 0;
  circleCenterY = 0;

  value = 0;

  constructor(private element: ElementRef) {
    super();
  }

  ngOnInit(): void {
    this.control.valueChanges.pipe(
      tap(value => {
        if (this.value !== value) {
          this.updateValueAndRotateCircle(value);
        }
      }),
      takeUntil(this.destroyed$)
    ).subscribe();

    fromEvent(this.element.nativeElement, 'mousedown').pipe(
      filter((event: MouseEvent) => event.button === 0),
      tap(() => this.calculateCircleCenter()),
      switchMap(() => fromEvent(document, 'mousemove').pipe(
        takeUntil(merge(
          fromEvent(document, 'mouseup'),
          fromEvent(document, 'click'),
        ))
      )),
      tap((event: MouseEvent) => {
        this.calculateAndUpdateAngleIfChanged(event.pageX, event.pageY);
      }),
      takeUntil(this.destroyed$),
    ).subscribe();
  }

  private calculateAndUpdateAngleIfChanged(cursorPositionX: number, cursorPositionY: number) {
    const deltaX = cursorPositionX - this.circleCenterX;
    const deltaY = cursorPositionY - this.circleCenterY;

    let angle = Math.round(Math.atan2(-deltaY, deltaX) * (180 / Math.PI));
    angle = angle >= 0 ? angle : angle + 360;

    if (this.value !== angle) {
      this.updateValueAndRotateCircle(angle);
      this.control.patchValue(angle);
    }
  }

  private calculateCircleCenter() {
    const circleRect = this.circle.nativeElement.getBoundingClientRect();

    this.circleCenterX = circleRect.left + circleRect.width / 2;
    this.circleCenterY = circleRect.top + circleRect.height / 2;
  }

  private updateValueAndRotateCircle(value: number): void {
    this.value = value;
    this.circle.nativeElement.style.transform = 'rotate(-' + value + 'deg)';
  }
}
