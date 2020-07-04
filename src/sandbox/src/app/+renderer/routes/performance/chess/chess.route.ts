import { generateChessBoard } from './../functions';
import { AbstractComponent } from '@pe/builder-core';
import { switchMap, tap, takeUntil } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { interval, BehaviorSubject, of, iif, EMPTY } from 'rxjs';
import { cloneDeep, random } from 'lodash-es';

@Component({
  selector: 'peb-chess',
  templateUrl: './chess.route.html',
  styleUrls: ['./chess.route.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SandboxRendererPerfomanceChessRoute extends AbstractComponent implements OnInit {

  public content$ = new BehaviorSubject<any>(null);
  public startSubject$ = new BehaviorSubject(false);
  public clearSubject$ = new BehaviorSubject(false);
  public generateChessBoard = generateChessBoard;

  private chessBoardParameters = { rows: 10, cols: 10, interval: 300 };

  ngOnInit() {

    this.startSubject$.pipe(
      switchMap( started =>
        iif(() => started, interval(this.chessBoardParameters.interval))
      ),
      tap(() => this.changeStylesheetElement()),
      takeUntil(this.destroyed$)
    ).subscribe();

    this.clearSubject$.pipe(
      switchMap( clear => clear ? of(true) : EMPTY),
      tap(() => this.changeStylesheetElement(true)),
      takeUntil(this.destroyed$)
    ).subscribe();

    this.content$.next(generateChessBoard(this.chessBoardParameters.cols, this.chessBoardParameters.rows));
  }

  private changeStylesheetElement(clear = false) {
    const randRows = random(0, this.chessBoardParameters.rows - 1);
    const randCols = random(0, this.chessBoardParameters.cols - 1);
    const content = cloneDeep(this.content$.getValue());
    content.stylesheet.all = {};
    if (!clear) {
      content.stylesheet.all['gb-block-' + randRows + '-' + randCols] = { backgroundColor: 'red' };
    }
    this.content$.next(content);
  }


}
