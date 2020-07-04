import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AbstractControlOptions, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { capitalize } from 'lodash-es';
import { merge, Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

import { AbstractComponent, PebPage, PebPageType, PebPageVariant, PebTheme } from '@pe/builder-core';
import { PebPageToolabrData } from '../../interfaces';
import { pickPageInfo } from './utils';

const NAME_FIELD = 'name';
const IS_DEFAULT_FIELD = 'default';
const VARIANT_FIELD = 'variant';
const FORM_FIELDS: string[] = [NAME_FIELD, IS_DEFAULT_FIELD, VARIANT_FIELD];
const FROM_FIELDS_WITH_DEBOUNCE: string[] = [IS_DEFAULT_FIELD, VARIANT_FIELD];
const DEBOUNCE_TIME = 600;

@Component({
  selector: 'peb-ui-page-toolbar',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PebPageToolbarComponent extends AbstractComponent implements OnInit, OnChanges {
  PebPageType = PebPageType;

  pageVariants = Object.values(PebPageVariant)
    // TODO: Delete filter once Category variant is enabled for Master Pages
    .filter(variant => variant !== PebPageVariant.Category);

  capitalize = capitalize;

  @Input()
  theme: PebTheme;

  @Input()
  page: PebPage;

  @Output()
  toolbarInfoChanged = new EventEmitter<PebPageToolabrData>();

  form = this.formBuilder.group({
    [NAME_FIELD]: getControl(null, [Validators.required, Validators.minLength(3)], 'blur'),
    [IS_DEFAULT_FIELD]: getControl(null, [Validators.required]),
    [VARIANT_FIELD]: getControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {
    super();
  }

  ngOnInit(): void {
    const observables: Observable<{field: string, fieldValue: string}>[] = FORM_FIELDS.map(field =>
      this.form.get(field).valueChanges.pipe(
        map(fieldValue => ({ field, fieldValue })),
        debounceTime(FROM_FIELDS_WITH_DEBOUNCE.includes(field) ? DEBOUNCE_TIME : 0),
      ),
    );

    merge(...observables).pipe(
      tap(({ field, fieldValue }: { field: string, fieldValue: any }) => {
        const emittedValue: PebPageToolabrData = {
          [field]: fieldValue,
        };
        this.toolbarInfoChanged.emit(emittedValue);
      }),
    ).subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.page &&
      (!changes.page.previousValue || changes.page.currentValue && changes.page.currentValue.id !== changes.page.previousValue.id)
    ) {
      this.form.setValue(
        pickPageInfo(this.theme, this.page),
        { emitEvent: false },
      );
    }
  }
}

function getControl(
  defaultValue: any,
  validators: (ValidatorFn | ValidationErrors)[],
  updateOnEventName = 'change', // tslint:disable-line:typedef
): [string, AbstractControlOptions] {
  return [
    defaultValue,
    {
      asyncValidators: [],
      validators,
      updateOn: updateOnEventName,
    } as AbstractControlOptions,
  ];
}
