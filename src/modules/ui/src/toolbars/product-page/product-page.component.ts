import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AbstractControlOptions, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { takeUntil, tap } from 'rxjs/operators';

import { AbstractComponent, PebElementType, PebPageStore } from '@pe/builder-core';

import { PebProductPageToolbar } from '../../interfaces';

const WIDTH_FIELD = 'styles.width';
const HEIGHT_FIELD = 'styles.height';

@Component({
  selector: 'peb-ui-product-page-toolbar',
  templateUrl: 'product-page.component.html',
  styleUrls: ['product-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PebProductPageToolbarComponent extends AbstractComponent implements AfterContentInit, OnInit {
  builderElement: PebElementType = PebElementType.ProductPage;
  currentWidth: number = 400;
  currentHeight: number = 530;
  component: any;

  form = this.formBuilder.group({
    styles: this.formBuilder.group({
      width: getControl(400, [Validators.required]),
      height: getControl(530, [Validators.required]),
    }),
  });

  //TODO: typedef
  @Input()
  activeElement: string;
  @Input()
  pageStore: PebPageStore;
  @Input()
  registry: any;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    super();
  }

  decreaseWidth(): void {
    this.form.get(WIDTH_FIELD).patchValue(this.currentWidth - 1);
  }

  decreaseHeight(): void {
    this.form.get(HEIGHT_FIELD).patchValue(this.currentHeight - 1);
  }

  increaseWidth(): void {
    this.form.get(WIDTH_FIELD).patchValue(this.currentWidth + 1);
  }

  increaseHeight(): void {
    this.form.get(HEIGHT_FIELD).patchValue(this.currentHeight + 1);
  }

  ngOnInit(): void {
    this.form.get(WIDTH_FIELD).valueChanges.pipe(
      tap((width: number) => {
        this.currentWidth = width;
        let productPageWidth = (width * 5) / 2;
        if (productPageWidth > 1000) {
          productPageWidth = 1000;
        }
        this.pageStore.updateElement(this.activeElement, {
          style: { width: productPageWidth },
          data: { width, height: this.currentHeight },
        });
      }),
      takeUntil(this.destroyed$),
    ).subscribe();

    this.form.get(HEIGHT_FIELD).valueChanges.pipe(
      tap((height: number) => {
        this.currentHeight = height;
        this.pageStore.updateElement(this.activeElement, {
          data: { height, weight: this.currentWidth },
        });
      }),
      takeUntil(this.destroyed$),
    ).subscribe();
  }

  ngAfterContentInit(): void {
    this.component = this.registry.getComponent(this.activeElement);
    const initialData = this.getInitialData()
    this.form.setValue(initialData, { emitEvent: false });
    this.currentWidth = initialData.styles.width;
    this.currentHeight = initialData.styles.height;
    this.component.changes$.pipe(
      tap(() => {
        if (this.isResizeDataNew()) {
          this.form.patchValue(this.getResizeData(), { emitEvent: false });
          this.pageStore.updateElement(this.activeElement, {
            data: { width: Math.ceil(this.imageWidthPorportional) },
          });
        }
      }),
      takeUntil(this.destroyed$),
    ).subscribe();
  }

  onFormKey(event: KeyboardEvent): void {
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
    }
  }

  getInitialData(): PebProductPageToolbar {
    return {
      styles: {
        width: this.component
          ? this.initialMinWidth : 400,
        height: this.component
          ? this.initialMinHeight : 530,
      },
    };
  }

  getResizeData(): PebProductPageToolbar {
    return {
      styles: {
        width: this.component
          ? Math.ceil(this.imageWidthPorportional) : 400,
      },
    };
  }

  isResizeDataNew(): boolean {
    return Math.ceil(this.imageWidthPorportional) !== Math.ceil(this.initialMinWidth) && (this.initialMinWidth <= 400 || this.imageWidthPorportional < 400);
  }

  protected createForm(initialData: PebProductPageToolbar): void {
    const data = this.getInitialData();
    this.form = this.formBuilder.group({
      styles: this.formBuilder.group({
        width: [data.styles.width],
        height: [data.styles.height],
      }),
    });
  }

  get imageWidthPorportional(): number {
    return (Number(this.component.getScreenStyle(this.component.style.width)) * 2) / 5;
  }

  get initialMinWidth(): number {
    const comp: any = this.component;

    return comp.toolbarWidth ? comp.toolbarWidth : 400;
  }

  get initialMinHeight(): number {
    const comp: any = this.component;

    return comp.toolbarHeight ?  comp.toolbarHeight : 530;
  }

  get maxWidth(): number {
    return 980;
  }

  get maxHeight(): number {
    const parentHeight: number = this.component.getScreenStyle(
      this.component.parentComponent.style.height,
    );
    const top: number = this.component.getScreenStyle(
      this.component.style.top,
    );

    return parentHeight - top;
  }

  // tslint:disable-next-line:no-empty
  protected onUpdateFormData(formValues: PebProductPageToolbar): void {}

  // tslint:disable-next-line:no-empty
  protected onSuccess(): void {}
}

function getControl(
  defaultValue: number,
  validators: (ValidatorFn | ValidationErrors)[],
  updateOnEventName = 'change', // tslint:disable-line:typedef
): [number, AbstractControlOptions] {
  return [
    defaultValue,
    {
      asyncValidators: [],
      validators,
      updateOn: updateOnEventName,
    } as AbstractControlOptions,
  ];
}
