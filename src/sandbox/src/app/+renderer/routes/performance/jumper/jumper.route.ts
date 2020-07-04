import { generateChessBoard } from './../functions';
import { cloneDeep, random } from 'lodash-es';
import { AbstractComponent } from '@pe/builder-core';
import { interval, BehaviorSubject, of, iif, EMPTY } from 'rxjs';
import { switchMap, takeUntil, tap, filter } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'peb-jumper',
  templateUrl: './jumper.route.html',
  styleUrls: ['./jumper.route.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SandboxRendererPerformanceJumperRoute extends AbstractComponent implements OnInit {

  public content$ = new BehaviorSubject<any>(null);
  public startSubject$ = new BehaviorSubject(false);
  public clearSubject$ = new BehaviorSubject(false);
  public generateChessBoard = generateChessBoard;

  private pawnCoords: { rows: number, cols: number } | null = null;
  private chessBoardParameters = { rows: 10, cols: 10, interval: 300 };

  ngOnInit() {

    this.startSubject$.pipe(
      switchMap( started =>
        iif(() => started, interval(this.chessBoardParameters.interval))
      ),
      tap(() => this.changePawnCoordinates()),
      takeUntil(this.destroyed$)
    ).subscribe();

    this.clearSubject$.pipe(
      switchMap( clear => clear ? of(true) : EMPTY),
      tap(() => this.changePawnCoordinates(true)),
      takeUntil(this.destroyed$)
    ).subscribe();

    this.content$.next(generateChessBoard(this.chessBoardParameters.cols, this.chessBoardParameters.rows));
  }

  private changePawnCoordinates(clear = false) {

    const randRows = random(0, this.chessBoardParameters.rows - 1);
    const randCols = random(0, this.chessBoardParameters.cols - 1);
    const content = cloneDeep(this.content$.getValue());

    if (!clear) {
      content.element.children[randRows].children[randCols].children = [{ id: 'pawn', type: 'block' }];
    }

    if (
      this.pawnCoords != null &&
      content.element &&
      content.element.children[this.pawnCoords.rows] &&
      content.element.children[this.pawnCoords.rows].children[this.pawnCoords.cols]
    ) {
      delete content.element.children[this.pawnCoords.rows].children[this.pawnCoords.cols].children;
    }
    this.pawnCoords = !clear ? { rows: randRows, cols: randCols } : null;

    this.content$.next(content);
  }

  onRenderingCycle(event) {
    // console.log(event);
  }

}
