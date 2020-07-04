import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewContainerRef, Output, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { defaultLineSettings } from '../../../../../sandbox/src/app/+line-editor/line-editor.component';
import { Cmyk, ColorPickerService } from 'ngx-color-picker';
import { PebElement, PebElementStyles } from '@pe/builder-core';

@Component({
  selector: 'peb-editor-line-sidebar',
  templateUrl: './line.sidebar.html',
  styleUrls: ['./line.sidebar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebEditorLineSidebarComponent implements OnInit, OnDestroy {

  @Input() element: PebElement;
  @Input() styles: PebElementStyles;

  @Output() applyStyles = new EventEmitter<PebElement>();

   toggle = false;
   color1 = '#000000';
   shadowColor = 'rgba(0,0,0,1)';
    boxShadow;
    lineOpacity;
    myUnit = '30px';
    top;
    margin;
    float;

  styleForm = new FormGroup({
    stroke: new FormControl(true),
    strokeColor: new FormControl(this.color1),
    height: new FormControl(2),
  });

  propertiesForm = new FormGroup({
    shadow: new FormControl(false),
    blur: new FormControl(0),
    offset: new FormControl(7),
    shadowColor: new FormControl(this.shadowColor),
    shadowAngle: new FormControl(0),
    shadowOpacity: new FormControl(100),
    reflection: new FormControl(50),
    opacity: new FormControl(100),
    align: new FormControl('Left'),
    width: new FormControl(500),
    startX: new FormControl(500),
    startY: new FormControl(500),
    lineAngle: new FormControl(0),
    endX: new FormControl(500),
    endY: new FormControl(500)

  });

  destroy$: Subject<void> = new Subject<void>();

  ratio = 1;
  slidesTabSelected = true;

  // get constraintProportionsInput() {
  //   return this.arrangeForm.get('size').get('saveProportions');
  // }

  get widthInput() {
    // return this.propertiesForm.get('size').get('width');
    return this.propertiesForm.get('width');
  }

  get heightInput() {
    return this.styleForm.get('height');
  }

  constructor(public vcRef: ViewContainerRef, private cpService: ColorPickerService) {
    this.applyStyles = new EventEmitter();
   }

  ngOnInit(): void {

    this.styleForm.valueChanges.pipe(
      takeUntil(this.destroy$),
    ).subscribe(res => {
      this.applyStyles.next(this.element);
    });

    this.propertiesForm.valueChanges.pipe(
      takeUntil(this.destroy$),
    ).subscribe(res => {
      let color = this.propertiesForm.get('shadowColor').value;
      const index = color.lastIndexOf(',');
      const result = color.substring(0, index);
      let opacity = this.propertiesForm.get('shadowOpacity').value;
      opacity = +(opacity) / 100;
      color = result + ',' + opacity + ')';
      const offset = +(this.propertiesForm.get('offset').value) * 2;
      const blur = +(this.propertiesForm.get('blur').value) * 2;
      this.boxShadow = '0px ' + offset + 'px ' + blur + 'px ' + color;
      this.lineOpacity = this.propertiesForm.get('opacity').value;
      this.lineOpacity = +(this.lineOpacity) / 100;
      this.applyStyles.next(this.element);
    });

    this.propertiesForm.get('align').valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        console.log(res);
        switch (res) {
          case 'Top':
            this.top = '-37rem';
            this.float = null;
            this.margin = '0px';
            break;
          case 'Bottom':
            this.top = '0rem';
            this.float = null;
            this.margin = '0px';
            break;
          case 'Middle':
            this.top = null;
            this.float = null;
            this.margin = 'auto';
            break;
          case 'Left':
            this.top = null;
            this.float = 'left';
            this.margin = null;
            break;
          case 'Right':
            this.top = null;
            this.float = 'right';
            this.margin = '0px';
            break;

          case 'Center':
            this.top = null;
            this.float = null;
            this.margin = '0px auto';
            break;
          default:
            this.top = null;
            this.float = null;
            this.margin = '0px';
            break;
        }
      });

    // this.arrangeForm.valueChanges.pipe(
    //   takeUntil(this.destroy$),
    // ).subscribe(res => {
    //   this.applyStyles.next(this.element);
    // });


    // this.constraintProportionsInput.valueChanges
    //   .pipe(
    //     tap(() => {
    //       const form = this.arrangeForm.getRawValue();
    //       this.ratio = form.size.width / form.size.height;
    //     }),
    //     takeUntil(this.destroy$),
    //   ).subscribe();

    // this.widthInput.valueChanges
    //   .pipe(
    //     tap(width => {
    //       // if (this.constraintProportionsInput.value) {
    //         this.heightInput.patchValue((width / this.ratio).toFixed(2), {emitEvent: false});
    //       // }
    //     }),
    //     takeUntil(this.destroy$),
    //   ).subscribe();

    // this.heightInput.valueChanges
    //   .pipe(
    //     tap(height => {
    //       // if (this.constraintProportionsInput.value) {
    //         this.widthInput.patchValue((height * this.ratio).toFixed(2), {emitEvent: false});
    //       // }
    //     }),
    //     takeUntil(this.destroy$),
    //   ).subscribe();

    // this.arrangeForm.setValue(defaultLineSettings);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  increment(formName: string) {
    const currentValue = +(this.styleForm.get(formName).value);
    if (currentValue >= 1 && currentValue < 50) {
        const incremented = (currentValue + 1).toString();
        this.styleForm.get(formName).patchValue(incremented);
      } else if (currentValue < 1) {
        const incremented = (currentValue + 0.25).toString();
        this.styleForm.get(formName).patchValue(incremented);
      }
    }

    decrement(formName: string) {
      const currentValue = +(this.styleForm.get(formName).value);
      if (currentValue <= 1 && currentValue > 0.25) {
          const decremented = (currentValue - 0.25).toString();
          this.styleForm.get(formName).patchValue(decremented);
        } else if (currentValue > 1) {
          const decremented = (currentValue - 1).toString();
          this.styleForm.get(formName).patchValue(decremented);
      }
      }

  toggleTab(slidesTab: boolean) {
    this.slidesTabSelected = slidesTab;
  }

  public onEventLog(event: string, data: any): void {
    // console.log(event, data);
  }
  public onChangeColorCmyk(color: string): Cmyk {
    const hsva = this.cpService.stringToHsva(color);

    if (hsva) {
      const rgba = this.cpService.hsvaToRgba(hsva);

      return this.cpService.rgbaToCmyk(rgba);
    }

    return new Cmyk(0, 0, 0, 0);
  }
    onStyleColorPickerChange(newColor: string, formName) {
      this.styleForm.get(formName).patchValue(newColor);
    }

    onShadowColorPickerChange(newColor: string, formName) {
     const result = newColor.includes('rgba');
     if (result) {
      let alpha = newColor.substring(newColor.lastIndexOf(',') + 1);
      const index = alpha.lastIndexOf(')');
      alpha = alpha.substring(0, index);
      const opacity = +(alpha) * 100;
      this.propertiesForm.get(formName).patchValue(newColor);
      this.propertiesForm.get('shadowOpacity').patchValue(opacity);
     } else {
       newColor = newColor.replace('rgb(', 'rgba(');
       newColor = newColor.replace(')', '');
       let opacity = this.propertiesForm.get('shadowOpacity').value;
       opacity = +(opacity) / 100;
       const color = newColor + ',' + opacity + ')';
       this.propertiesForm.get(formName).patchValue(color);
     }

    }

    incrementProperty(formName: string) {
      const currentValue = +(this.propertiesForm.get(formName).value);
      if (currentValue < 100) {
          const incremented = (currentValue + 1).toString();
          this.propertiesForm.get(formName).patchValue(incremented);
        }
      }
      decrementProperty(formName: string) {
        const currentValue = +(this.propertiesForm.get(formName).value);
        if (currentValue >= 1) {
            const incremented = (currentValue - 1).toString();
            this.propertiesForm.get(formName).patchValue(incremented);
          }
        }

        incrementPosition(formName: string) {
          let currentValue = +(this.propertiesForm.get(formName).value);
          currentValue = currentValue + 1;
          let currentAngle = +(this.propertiesForm.get('lineAngle').value);
          if (formName === 'startY') {
            currentAngle = currentAngle + 0.1;
            if (currentAngle >= 360) {
              currentAngle = 0;
            }
          } else if (formName === 'endY') {
            if (currentAngle === 0) {
              currentAngle = 360 - 0.1;
            } else {
              currentAngle = currentAngle - 0.1;
            }
          }
          this.propertiesForm.get(formName).patchValue(currentValue);
          this.propertiesForm.get('lineAngle').patchValue(currentAngle.toFixed(1));
        }

        decrementPosition(formName: string) {
          let currentValue = +(this.propertiesForm.get(formName).value);
          if (currentValue >= 1) {
          currentValue = currentValue - 1;
          let currentAngle = +(this.propertiesForm.get('lineAngle').value);
          if (formName === 'startY') {
            if (currentAngle === 0) {
              currentAngle = 360 - 0.1;
            } else {
              currentAngle = currentAngle - 0.1;
            }
          } else if (formName === 'endY'){
            currentAngle = currentAngle + 0.1;
            if (currentAngle >= 360) {
              currentAngle = 0;
            }
          }
          this.propertiesForm.get(formName).patchValue(currentValue);
          this.propertiesForm.get('lineAngle').patchValue(currentAngle.toFixed(1));
        }
      }

      incrementDegree(formName: string) {
        let currentValue = +(this.propertiesForm.get(formName).value);
        currentValue = currentValue + 1;
        if (currentValue >= 360) {
          currentValue = 0;
        }
        this.propertiesForm.get(formName).patchValue(currentValue);
      }

      decrementDegree(formName: string) {
        let currentValue = +(this.propertiesForm.get(formName).value);
        if (currentValue >= 1) {
        currentValue = currentValue - 1;
      } else if (currentValue === 0) {
          currentValue = 360 - 1;
        }
        this.propertiesForm.get(formName).patchValue(currentValue);
    }

    incrementWidth(formName: string) {
      const currentWidth = +(this.propertiesForm.get('width').value);
      let newWidth;
      let currentValue = +(this.propertiesForm.get(formName).value);
      currentValue = currentValue + 1;
      if (formName === 'startX') {
        if (currentWidth > 1) {
        newWidth = currentWidth - 1;
        }
      } else if (formName === 'endX') {
        newWidth = currentWidth + 1;

      }
      if (currentWidth !== newWidth) {
        this.propertiesForm.get(formName).patchValue(currentValue);
        this.propertiesForm.get('width').patchValue(newWidth);
      }
    }

    decrementWidth(formName: string) {
      const currentWidth = +(this.propertiesForm.get('width').value);
      let newWidth;
      let currentValue = +(this.propertiesForm.get(formName).value);
      currentValue = currentValue + 1;
      if (formName === 'endX') {
        if (currentWidth > 1) {
        newWidth = currentWidth - 1;
        }
      } else if (formName === 'startX') {
        newWidth = currentWidth + 1;
      }
      if (currentWidth !== newWidth) {
        this.propertiesForm.get(formName).patchValue(currentValue);
        this.propertiesForm.get('width').patchValue(newWidth);
      }
    }

}
