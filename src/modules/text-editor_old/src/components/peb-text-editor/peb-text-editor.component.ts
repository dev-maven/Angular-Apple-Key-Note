import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DefaultFontColor, DefaultFontSize, EscapedChar, ExecuteCommands } from '../../constants';
import {
  ExecuteCommandAction,
  LinksInterface,
  TextDecorationInterface,
  TextOptionsInterface,
  ToolbarOptionsInterface
} from '../../interfaces';
import { CommandExecutorService } from '../../services/command-executor.service';
import { TextEditorService } from '../../services/text-editor.service';
import * as Utils from '../../utils';

@Component({
  selector: 'peb-text-editor', // tslint:disable-line
  templateUrl: './peb-text-editor.component.html',
  styleUrls: ['./peb-text-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebTextEditorComponent implements AfterViewInit, OnDestroy {
  savedRange: Range;

  @Input() editable = false;
  @Input() smartToolbar = true;
  @Input() placeholder: string;
  @Input() htmlText: string;
  @Input() color: string;
  @Input() align: string;
  @Input() fontSize: number = DefaultFontSize;
  @Input() scale = 1;
  @Input() lineHeight: number = DefaultFontSize;
  @Input() fontWeight: string;
  @Input() fontFamily: string;
  @Input() isOutlineNone = true;
  @Output() contentChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() editorBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() editorFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() editorClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() caretSet: EventEmitter<any> = new EventEmitter<any>();
  @Output() fontSizeChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() fontFamilyChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('textArea') textArea: ElementRef<HTMLElement>;

  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject();
  private toolbarOptions: ToolbarOptionsInterface = {
    [ExecuteCommands.BOLD]: false,
    [ExecuteCommands.ITALIC]: false,
    [ExecuteCommands.UNDERLINE]: false,
    color: this.color || DefaultFontColor,
    fontSize: DefaultFontSize,
    href: '',
    activeLinks: []
  };

  constructor(
    public editorService: TextEditorService,
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private executorService: CommandExecutorService
  ) {
  }

  onContentPasted(event: ClipboardEvent): void {
    const text: string = event.clipboardData.getData('text');
    this.executorService.insertTextAtRange(text, this.range, this.selection);
    this.emitContentChange();
    this.handleToolbarOptions();
    event.preventDefault();
  }

  get shadowRoot(): Document {
    return this.elementRef.nativeElement.shadowRoot;
  }

  get selection(): Selection {
    return window.getSelection ? window.getSelection() : null;
  }

  get range(): Range {
    return Utils.getRange(this.selection);
  }

  get nativeElement() {
    return this.textArea.nativeElement;
  }

  ngAfterViewInit(): void {
    this.editorService.triggerCommand$.pipe(takeUntil(this.destroyed$)).subscribe((action: ExecuteCommandAction) => {
      if (!this.editable) {
        return ;
      }
      switch (action.key) {
        case ExecuteCommands.FONT_SIZE:
          const size: number = Number(action.value);
          if (!this.savedRange) {
            this.setCaretToEnd();
          } else {
            Utils.restoreSelection(this.savedRange, this.selection);
          }
          if (Utils.compareByChars(this.savedRange.toString(), this.textArea.nativeElement.innerText)
            || escape(this.textArea.nativeElement.innerText) === EscapedChar) {
            this.fontSize = size;
            this.lineHeight = size;
            this.fontSizeChange.emit(size);
          } else {
            this.executorService.setFontSize(size, this.renderer, this.textArea.nativeElement);
          }
          this.toolbarOptions.fontSize = size / this.scale;
          break;
        case ExecuteCommands.INSERT_LINK:
          Utils.restoreSelection(this.savedRange, this.selection);
          this.executorService.insertLink(action.value, action.options, this.renderer);
          this.handleToolbarOptions();
          break;
        case ExecuteCommands.INSERT_INTERNAL_LINK:
          Utils.restoreSelection(this.savedRange, this.selection);
          this.executorService.insertInternalLink(action.options.link, action.options.newTab,  this.renderer);
          break;
        case ExecuteCommands.SET_FOCUS:
          this.setFocus();
          break;
        case ExecuteCommands.FONT_FAMILY:
          this.fontFamily = action.value;
          this.selectAll();
          this.saveSelection();
          break;
        case ExecuteCommands.SET_CARET:
          this.setCaret();
          break;
        case ExecuteCommands.TEXT_COLOR:
          action.value = Utils.rgbToHex(action.value);
          this.toolbarOptions.color = action.value;
          if (!Utils.hasList()) {
            if (this.savedRange && this.savedRange.collapsed && !this.executorService.isInLastPosition()) {
              this.executorService.execute(ExecuteCommands.SELECT_ALL);
            } else {
              Utils.restoreSelection(this.savedRange, this.selection);
            }
            this.executorService.execute(action.key, action.value);
            this.executorService.setListColorInRange(this.savedRange, action.value, this.renderer);
          } else {
            this.executorService.setListColor(this.savedRange, action.value, this.renderer);
          }
          if (this.range && !this.range.collapsed) {
            this.executorService.setSelectionLinksColor(action.value, this.range, this.selection, this.renderer);
          }
          break;
        default:
          Utils.restoreSelection(this.savedRange, this.selection);
          this.executorService.execute(action.key, action.value);
      }

      if ([ExecuteCommands.BOLD, ExecuteCommands.ITALIC, ExecuteCommands.UNDERLINE].includes(action.key)) {
        if (action.key === ExecuteCommands.UNDERLINE) {
          this.executorService.toggleLinkUnderline(this.renderer);
        }
        (this.toolbarOptions[action.key] as boolean) = !this.toolbarOptions[action.key];
      }
      if ([ExecuteCommands.JUSTIFY_RIGHT, ExecuteCommands.JUSTIFY_CENTER,
        ExecuteCommands.JUSTIFY_LEFT, ExecuteCommands.JUSTIFY_FULL].includes(action.key)) {
        this.toolbarOptions.justify = action.key;
      }
      if ([ExecuteCommands.LIST_UNORDERED, ExecuteCommands.LIST_ORDERED].includes(action.key)) {
        this.toolbarOptions.list = action.key;
        if (Utils.hasList()) {
          const container = this.range.commonAncestorContainer as HTMLElement;
          if (Utils.isHtmlElement(container) && container.hasAttribute('contenteditable')) {
            this.range.selectNodeContents(container.firstChild);
            Utils.restoreSelection(this.range, this.selection);
          }
          this.executorService.setListColor(this.range, this.toolbarOptions.color, this.renderer);
        } else {
          this.editorService.triggerCommand$.next({key: ExecuteCommands.TEXT_COLOR, value: this.toolbarOptions.color});
        }
      }
      if ([ExecuteCommands.INSERT_INTERNAL_LINK, ExecuteCommands.INSERT_LINK].includes(action.key)) {
        this.executorService.setSelectionLinksColor('#74C4FF', this.savedRange, this.selection, this.renderer);
        this.saveSelection();
        this.handleToolbarOptions();
      }
      this.emitContentChange();
      this.saveSelection();
    });
    if (this.htmlText) {
      this.textArea.nativeElement.innerHTML = this.htmlText;
    } else {
      this.setPlaceholder();
    }
  }

  setFocus(): void {
    this.executorService.shadowRoot = this.shadowRoot;
    this.textArea.nativeElement.focus();
  }

  setCaret(): void {
    if (this.savedRange) {
      Utils.restoreSelection(this.savedRange, this.selection);
      this.saveSelection();
    } else {
      this.setCaretToEnd();
    }
    this.handleToolbarOptions(true);
    this.caretSet.emit();
  }

  setCaretToEnd(): void {
    this.savedRange = this.executorService.setCaretToEnd(this.textArea.nativeElement);
    this.handleToolbarOptions();
  }

  setPlaceholder(): void {
    this.textArea.nativeElement.innerHTML = this.placeholder;
  }

  setDefault(): void {
    this.textArea.nativeElement.innerHTML = `<span>&#8203</span>`;
  }

  selectAll(): void {
    const range: Range = document.createRange();
    range.selectNodeContents(this.textArea.nativeElement);
    Utils.restoreSelection(range, this.selection);
  }

  onTextAreaBlur(event: FocusEvent): void {
    /** save selection if focussed out */
    this.htmlText = (event.target as HTMLElement).innerText.trim();
    if (this.htmlText !== '') {
      Utils.clean(this.textArea.nativeElement, this.renderer);
    }
    this.editorBlur.emit(event);
  }

  onTextAreaFocus(event: FocusEvent): void {
    this.executorService.shadowRoot = this.shadowRoot;
    this.editorFocus.emit(event);
  }

  onTextAreaClick(event: MouseEvent): void {
    if (this.editable) {
      this.saveSelection();
      this.handleToolbarOptions();

      if (Utils.getRange(this.selection) === null) {
        this.setCaretToEnd();
      }

      if (Utils.isInLastPosition(this.savedRange)) {
        this.setCurrentTextColor();
      }
    }
    this.editorClick.emit(event);
  }

  setCurrentTextColor(): void {
    document.execCommand(ExecuteCommands.TEXT_COLOR, false, this.toolbarOptions.color);
  }

  onMouseLeave(): void {
    this.saveSelection();
    if (this.savedRange && !this.savedRange.collapsed) {
      this.handleToolbarOptions();
    }
  }

  onKeyDown(event: any) {
    // remove empty space character
    if (this.htmlText === this.placeholder && event.target.innerText.length !== 0 && Utils.isHtmlElement(event.target.firstChild)) {
      event.target.firstChild.innerText = '';
    }
  }

  onKeyUp(event: KeyboardEvent) {
    if (this.editable) {
      this.saveSelection();
    }

    return true;
  }

  onContentChanged(event: any): void {
    if (event.data !== null && event.data !== undefined && Utils.isInLastPosition(this.savedRange)) {
      const options: TextOptionsInterface = {};
      const textColor: string = Utils.hasFontColor();
      const fontSize: number = this.round(Utils.fontSizeToNumber(Utils.hasFontSize(this.selection)));
      const decorations: TextDecorationInterface = Utils.hasDecoration();
      options.color = this.toolbarOptions.color !== textColor ? this.toolbarOptions.color : undefined;
      options.fontSize = this.toolbarOptions.fontSize !== fontSize
        ? Utils.roundTo2(this.toolbarOptions.fontSize / this.fontSize) / this.scale
        : undefined;

      let hasDecChange = false;
      for (const key in decorations) {
        if (decorations[key] !== this.toolbarOptions[key]) {
          options[key] = this.toolbarOptions[key];
          hasDecChange = true;
        }
      }

      if (options.color || options.fontSize || hasDecChange) {
        Utils.clean(this.textArea.nativeElement, this.renderer);
        this.executorService.insertText(event.data,  options, this.renderer, this.textArea.nativeElement);
      }
      this.editorService.toggleToolbarAction$.next({action: 'textDecoration', value: decorations});
      this.saveSelection();
      this.handleToolbarOptions();
    }
    this.emitContentChange();
  }

  saveSelection(): void {
    if (this.editable) {
      this.executorService.savedRange = this.savedRange = Utils.parseRange(this.range, this.renderer);
    }
  }

  removeRange(): void {
    Utils.removeRange(this.selection);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  handleToolbarOptions(skipColor?: boolean, skipLastPosition?: boolean): void {
    if (this.editable) {
      setTimeout(() => {
        const decorations: TextDecorationInterface = Utils.hasDecoration();
        this.toolbarOptions = {...this.toolbarOptions, ...decorations};
        this.toolbarOptions.justify = Utils.hasJustify();
        this.toolbarOptions.list = Utils.hasList();
        this.editorService.toggleToolbarAction$.next({action: 'contentList', value: this.toolbarOptions.list});
        this.editorService.toggleToolbarAction$.next({action: 'textDecoration', value: decorations});
        this.editorService.toggleToolbarAction$.next({action: 'justifyContent', value: this.toolbarOptions.justify});

        let fontSize: number = Utils.fontSizeToNumber(Utils.hasFontSize(this.selection));
        fontSize = this.round(fontSize);
        if (fontSize) {
          this.editorService.toggleToolbarAction$.next({action: 'currentFontSize', value: fontSize / this.scale});
          this.toolbarOptions.fontSize = fontSize / this.scale;
        }
        // change toolbar color to selected text color
        const fontColor: string = Utils.hasFontColor();
        if (!skipColor && fontColor &&
          (skipLastPosition || !Utils.isInLastPosition(this.savedRange) || Utils.isTextSelected(this.savedRange))) {
          this.editorService.toggleToolbarAction$.next({action: 'currentFontColor', value: fontColor});
          this.toolbarOptions.color = fontColor;
        }
        const link = Utils.hasLink(this.savedRange);
        this.editorService.toggleToolbarAction$.next({action: 'currentLink', value: typeof link === 'string' && link !== '#' ? link : ''});
        this.editorService.toggleToolbarAction$.next({
          action: 'activeLinks',
          value: link && link.hasOwnProperty('id')
            ? [link as LinksInterface]
            : []
        });

        if (this.fontFamily) {
          this.editorService.toggleToolbarAction$.next({action: 'currentFontFamily', value: this.fontFamily});
        }
      });
    }
  }

  private emitContentChange(): void {
    this.htmlText = this.textArea.nativeElement.innerText;
    this.contentChange.emit(this.textArea.nativeElement.innerHTML);
  }

  private round(num, precision = 0) {
    const modifier = 10 ** precision;
    return !modifier ? Math.round(num) : Math.round(num * modifier) / modifier;
  }
}
