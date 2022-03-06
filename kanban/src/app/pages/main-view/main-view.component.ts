import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { BoardModel } from '@app/models/board.model';
import { ColumnModel } from '@app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  TODO = new ColumnModel('TODO', '', false, [
    'This is a TODO 1',
    'This is a TODO 2',
    'This is a TODO 3'
  ]);

  DOING = new ColumnModel('DOING', '', false, [
    'This is a DOING task 1',
    'This is a DOING task 2',
  ]);

  DONE = new ColumnModel('DONE', '', false, [
    'This is a DONE task 1',
    'This is a DONE task 2',
  ]);

  TESTED = new ColumnModel('TESTED', '', false, [
    'This is a TESTED task 1',
    'This is a TESTED task 2',
  ]);

  board: BoardModel = new BoardModel('Test Board', [
    this.TODO,
    this.DOING,
    this.DONE,
    this.TESTED
  ]);

  inputText = '';


  constructor() { }

  ngOnInit(): void {
  }

  public addToColumn(columnName: string, text: string) {
    if (text.trim() === '') {
      return;
    }
    this.board.columns.find(column => column.name === columnName)?.tasks.push(text);
  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
