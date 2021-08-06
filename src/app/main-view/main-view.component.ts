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
  
  // board: Board = new Board('Test Board',[
  //   new Column ('Ideas',[]),
  //   new Column ('Rearch',[]),
  //   new Column ('Todo',[]),
  //   new Column ('Done',[])
  // ]);

  // this.board.columns[boardIndex].tasks[taskIndex] will get a specific task
  board: Board = {
    name: 'Test Board',
    columns: [
      {
        name: 'Ideas',
        tasks: []
      },
      {
        name: 'Research',
        tasks: []
      },
      {
        name: 'Todo',
        tasks: []
      },
      {
        name: 'Done',
        tasks: []
      }
    ]
  }

  list: any[] = [];

  addTask(columnIndex: number, item: string){
    this.list.push({id: this.list.length, name: item})

    this.board.columns[columnIndex].tasks.push(item);

    console.warn(this.list);
  }


  removeTask(boardIndex: number, taskIndex: number){
    // this.list = this.list.filter(item=>item.id !== id);
    const tasks = this.board.columns[boardIndex].tasks;

    tasks.splice(taskIndex, 1);
    // console.warn(id);
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
