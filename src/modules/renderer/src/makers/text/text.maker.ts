import { PebRendererOptions } from './../../renderer.types';
import { AbstractComponent, PebElement, PebElementContext } from '@pe/builder-core';
import { BehaviorSubject, of,  animationFrameScheduler, fromEvent } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input, Injector, HostListener, ElementRef } from '@angular/core';
import { filter, takeUntil, map, tap, switchMap, debounceTime, subscribeOn, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'peb-maker-text',
  templateUrl: './text.maker.html',
  styleUrls: ['./text.maker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PebTextMaker extends AbstractComponent implements OnInit {

  @Input() element: PebElement;
  @Input() context: PebElementContext<any>;
  @Input() options: PebRendererOptions;

  initialValue$ = new BehaviorSubject<string>('');
  editing$ = new BehaviorSubject<boolean>(true);
  active$ = new BehaviorSubject<boolean>(true);

  ngOnInit() {

    this.elementRef.nativeElement.focus();

    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');
    const mousedown$ = fromEvent<MouseEvent>(this.elementRef.nativeElement.querySelector('.text-editor'), 'mousedown');
    const handleTm$ = fromEvent<MouseEvent>(this.elementRef.nativeElement.querySelector('.handle-tm'), 'mousedown');
    const handleMr$ = fromEvent<MouseEvent>(this.elementRef.nativeElement.querySelector('.handle-mr'), 'mousedown');
    const handleBm$ = fromEvent<MouseEvent>(this.elementRef.nativeElement.querySelector('.handle-bm'), 'mousedown');
    const handleMl$ = fromEvent<MouseEvent>(this.elementRef.nativeElement.querySelector('.handle-ml'), 'mousedown');


    const resizeElementTop$ = handleTm$.pipe(
      switchMap(
        (start) => {
          return mousemove$.pipe(
            map(move => {
              move.preventDefault();
              return {
                left: move.clientX - start.offsetX,
                top: move.clientY - start.offsetY,
              };
            }),
            subscribeOn(animationFrameScheduler),
            tap(pos => {

              const height = this.elementRef.nativeElement.offsetHeight;
              const top = this.elementRef.nativeElement.offsetTop;
              const currentHeight = height + (top - pos.top);

              if (currentHeight > 32) {
                this.elementRef.nativeElement.style.height =  currentHeight + 'px';
              }

              this.elementRef.nativeElement.style.top = `${pos.top}px`;
            }),
            takeUntil(mouseup$),
            takeUntil(this.destroyed$)
          );
        }
      )
    );

    const dragElement$ = mousedown$.pipe(
      switchMap(
        (start) => {
          return mousemove$.pipe(
            map(
              move => {
                move.preventDefault();
                return {
                  left: move.clientX - start.offsetX,
                  top: move.clientY - start.offsetY
                };
              }
            ),
            subscribeOn(animationFrameScheduler),
            tap((pos) => {
              this.elementRef.nativeElement.style.top = `${pos.top}px`;
              this.elementRef.nativeElement.style.left = `${pos.left}px`;
            }),
            takeUntil(mouseup$),
            takeUntil(this.destroyed$)
          );
        })
   );


    this.editing$.pipe(
      switchMap(editing => editing ? of(true) : of(null)),
      filter(Boolean),
      debounceTime(100),
      tap(_ => {
        this.elementRef.nativeElement.children[0].focus();
      }),
      withLatestFrom(dragElement$),
      withLatestFrom(resizeElementTop$),
      takeUntil(this.destroyed$)
    ).subscribe();

  }


  constructor(
    public injector: Injector,
    private elementRef: ElementRef,
  ) {
    super();
  }

  public onInput(): void {
    // this.changes$.next(this.textArea.nativeElement.innerHTML);
    // this.state.value = this.textArea.nativeElement.innerHTML;
  }

  public onBlur(): void {
    // this.state.value = this.textArea.nativeElement.innerHTML;
  }

  public onPaste(event: ClipboardEvent): void {
    // event.preventDefault();
    // const strippedText = event.clipboardData.getData('text');
    // document.execCommand(ExecCommand.InsertText, false, strippedText);
  }




}


/**import { of, fromEvent, animationFrameScheduler } from 'rxjs';
import { map, switchMap, takeUntil, startWith, tap, filter, subscribeOn } from 'rxjs/operators';

const box = document.querySelector<HTMLDivElement>('.draggable');

const mousedown$ = fromEvent<MouseEvent>(box, 'mousedown');
const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
const mouseup$ = fromEvent<MouseEvent>(box, 'mouseup');

const drag$ = mousedown$.pipe(
  switchMap(
    (start) => {
      return mousemove$.pipe(map(move => {
        move.preventDefault();
        return {
          left: move.clientX - start.offsetX,
          top: move.clientY - start.offsetY
        }
      }),
        takeUntil(mouseup$));
    }));

const position$ = drag$.pipe(subscribeOn(animationFrameScheduler));

position$.subscribe(pos => {
  box.style.top = `${pos.top}px`
  box.style.left = `${pos.left}px`
}); **/
