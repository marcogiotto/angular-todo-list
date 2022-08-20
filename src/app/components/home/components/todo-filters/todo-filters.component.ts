import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { taskStatus } from './../../models/task-status';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent implements OnInit {
  taskName: FormControl<string | null>;
  taskStatus: FormControl<string | null>;

  constructor() {
    this.taskName = new FormControl('');
    this.taskStatus = new FormControl(taskStatus.all);
  }

  ngOnInit(): void {
  }

}
