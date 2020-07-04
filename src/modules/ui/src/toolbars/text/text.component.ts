import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { capitalize } from 'lodash-es';
import { BehaviorSubject, merge, Observable, Subject } from 'rxjs';
import { debounceTime, filter, map, takeUntil, tap } from 'rxjs/operators';

import { AbstractComponent, PebPage, PebPageType, PebPageVariant, PebTheme } from '@pe/builder-core';
import { StateService } from '@pe/builder-text-editor';

const DEFAULT_DEBOUNCE = 600;
const TEXT_LINK_COLOR = '#74c4ff';

@Component({
  selector: 'peb-ui-text-toolbar',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PebTextToolbarComponent extends AbstractComponent implements OnInit {

  justifyLeft$: Observable<boolean> = this.textEditorState.justifyLeft$;

  justifyCenter$: Observable<boolean> = this.textEditorState.justifyCenter$;

  justifyRight$: Observable<boolean> = this.textEditorState.justifyRight$;

  justifyFull$: Observable<boolean> = this.textEditorState.justifyFull$;

  unorderedList$: Observable<boolean> = this.textEditorState.unorderedList$;

  orderedList$: Observable<boolean> = this.textEditorState.orderedList$;

  PebPageType = PebPageType;
  pageVariants = Object.values(PebPageVariant);

  capitalize = capitalize;
  externalLink = '';
  familySearched = '';
  isSearchingFonts = false;

  @Input()
  theme: PebTheme;

  @Input()
  page: PebPage;

  @Input()
  links: { id: string, title: string }[];

  fontSizes: number[] = Array.from({ length: 67 }, (_, i) => i + 6);

  fontFamilies: string[] = [
    'arial',
    'roboto',
    'open sans',
    'lato',
    'montserrat',
    'helvetica',
    'concert one',
    'courier prime',
    'lora',
    'merriweather',
    'muli',
    'noto sans',
    'oswald',
    'playfair display',
    'poppings',
    'prompt',
    'pt sans',
    'pt serif',
    'raleway',
    'roboto condensed',
    'roboto mono',
    'rubik',
    'source scans pro',
    'ubuntu',
    'work sans',
  ];

  colorSubject$ = new Subject<string>();
  toggleColorPicker$ = new BehaviorSubject<boolean>(false);
  changedExternalLink$ = new BehaviorSubject<string>(null);
  fontFamilies$ = new BehaviorSubject<string[]>(this.fontFamilies);

  externalLink$: Observable<string>;

  linkLabel$: Observable<string>;

  constructor(
    public textEditorState: StateService,
  ) {
    super();

    this.externalLink$ = this.textEditorState.externalLink$.pipe(
      map(link => link === '#' ? '' : link),
    );

    this.linkLabel$ = merge(
      this.textEditorState.link$.pipe(
        map(v => this.getLinkTitle(v)),
      ),
      this.textEditorState.externalLink$.pipe(
        filter(l => l !== '#'),
      ),
    );
  }

  onFilterFontFamily(familySearched: string): void {
    const eventLowerCase = familySearched.toLowerCase();

    this.isSearchingFonts = !!familySearched;
    this.fontFamilies$.next(this.fontFamilies.filter(font => font.includes(eventLowerCase)));
  }

  onColorPickerChange(color: string): void {
    this.colorSubject$.next(color);
  }

  // tslint:disable-next-line:typedef
  toggleColorPicker(open = false): void {
    this.toggleColorPicker$.next(!!open);
  }

  ngOnInit(): void {
    this.colorSubject$.pipe(
      debounceTime(DEFAULT_DEBOUNCE),
      tap(color => this.textEditorState.color = color),
      takeUntil(this.destroyed$),
    ).subscribe();

    this.changedExternalLink$.pipe(
      debounceTime(2000),
      filter(value => !!value),
      tap(value => {
        this.textEditorState.externalLink = value;
        this.applyLinkStyles();
      }),
      takeUntil(this.destroyed$),
    ).subscribe();
  }

  onChangeExternalLink(link: string): void {
    this.changedExternalLink$.next(link);
  }

  onChangeTextLink(value: { id: string, title?: string }): void {
    if (!value || !value.id) {
      return null;
    }

    this.textEditorState.link = value.id;

    this.applyLinkStyles();
  }

  private applyLinkStyles(): void {
    if (!this.textEditorState.underline) {
      this.textEditorState.toggleUnderline();
    }
    this.textEditorState.color = TEXT_LINK_COLOR;
  }

  private getLinkTitle(value: string): string {
    const link = this.links.find(link => link.id === value);

    return link && link.title ? link.title : null;
  }

}
