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

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  TODO = new ColumnModel('TODO', [
    'First task',
    'Second task',
    'This is a TODO 3',
    'This is a TODO 4'
  ]);

  DOING = new ColumnModel('DOING', [
    'This is a DOING task 1',
    'This is a DOING task 2',
  ]);

  DONE = new ColumnModel('DONE', [
    'This is a DONE task 1',
    'This is a DONE task 2',
  ]);

  TESTED = new ColumnModel('TESTED', [
    'This is a TESTED task 1',
    'This is a TESTED task 2',
  ]);

  board: BoardModel = new BoardModel('Test Board', [
    this.TODO,
    this.DOING,
    this.DONE,
    this.TESTED
  ]);



  constructor() { }

  ngOnInit(): void {
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
