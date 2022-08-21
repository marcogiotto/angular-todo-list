import { TaskModel } from './../../models/task.model';
import { FormControl } from '@angular/forms';
import { taskStatus } from './../../models/task-status';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  taskStatus: FormControl;
  @Input('item') task: TaskModel | undefined;

  constructor() {
    this.taskStatus = new FormControl('');
  }

  ngOnInit(): void {
    console.log(this.task);
    this.taskStatus.setValue(this.task?.status);
  }

}
