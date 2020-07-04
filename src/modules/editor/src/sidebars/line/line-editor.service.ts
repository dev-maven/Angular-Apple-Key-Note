import { Injectable } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { BehaviorSubject, merge, Observable, of, Subject } from 'rxjs';
import {  shareReplay, switchMap, tap } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class LineEditorService {

  private slides: string[] = [];

  private addSlide$: Subject<string> = new Subject<string>();
  private deleteSelected$: Subject<void> = new Subject<void>();
  private changeSelectedSlideImage$ = new Subject<string>();
  private moveSlides$: Subject<CdkDragDrop<any[]>> = new Subject<CdkDragDrop<any[]>>();

  private readonly slides$: Observable<string[]>;
  selectedSlideIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  slideTitles: FormArray = new FormArray([]);


  constructor() {
    const addSlide$ = this.addSlide$
      .pipe(
        tap((imgUrl: string) => {
          this.slides.push(imgUrl);
          this.slideTitles.push(new FormControl('Slide ' + this.slides.length));
        }),
      );

    const deleteSelectedSlide$ = this.deleteSelected$
      .pipe(
        tap(() => {
          this.slides.splice(this.selectedSlideIndex$.getValue(), 1);
        }),
      );

    const changeSelectedSlideImage$ = this.changeSelectedSlideImage$
      .pipe(
        tap((img) => {
          if (this.slides.length) {
            this.slides[this.selectedSlideIndex$.getValue()] = img;
          } else {
            this.addSlide$.next(img);
          }
        })
      );

    const moveItems$ = this.moveSlides$.pipe(
      tap((event) => {
        moveItemInArray(this.slides, event.previousIndex, event.currentIndex);
        moveItemInArray(this.slideTitles.controls, event.previousIndex, event.currentIndex);
      })
    );

    this.slides$ = merge(
      addSlide$,
      deleteSelectedSlide$,
      changeSelectedSlideImage$,
      moveItems$,
    ).pipe(
      switchMap(() => of(this.slides)),
      shareReplay(),
    );
  }

  getSlides(): Observable<string[]> {
    return this.slides$;
  }

  getSelectedSlideIndex(): Observable<number> {
    return this.selectedSlideIndex$.asObservable();
  }

  addSlide(imgUrl: string): void {
    this.addSlide$.next(imgUrl);
  }

  deleteSelected(): void {
    this.deleteSelected$.next();
  }

  selectSlide(key: number): void {
    this.selectedSlideIndex$.next(key);
  }

  changeSelectedSlideImage(img: string): void {
    this.changeSelectedSlideImage$.next(img);
  }

  moveItems(event: CdkDragDrop<any[]>): void {
    this.moveSlides$.next(event);
    this.selectSlide(event.currentIndex);
  }

}
