import { Column } from 'src/app/models/column.model';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  
  newItem: string="";

  board: Board = {
    name: 'Application Prototype I',
    columns: [
      {
        name: 'Ideas',
        tasks: [],
        newItem: ""
      },
      {
        name: 'Research',
        tasks: [],
        newItem: ""
      },
      {
        name: 'Todo',
        tasks: [],
        newItem: ""
      },
      {
        name: 'Done',
        tasks: [],
        newItem: ""
      }
    ]
  }

  list: any[] = [];

  addTask(columnIndex: number){
    const newItem = this.board.columns[columnIndex].newItem;
    if(newItem) {
      this.list.push({id: this.list.length, name: newItem})
      this.board.columns[columnIndex].tasks.push(newItem);
      console.warn(this.list);
      this.board.columns[columnIndex].newItem = "";
    }
  }


  removeTask(boardIndex: number, taskIndex: number){
    const tasks = this.board.columns[boardIndex].tasks;
    tasks.splice(taskIndex, 1);
  }

  constructor() { }


  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
