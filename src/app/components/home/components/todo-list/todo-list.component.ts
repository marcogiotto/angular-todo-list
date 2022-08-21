import { TaskModel } from './../../models/task.model';
import { AppState } from './../../../../store/app.state';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks$: Observable<TaskModel[] | null>;

  constructor(private state: Store<AppState>) {

    this.tasks$ = this.state.select('tasks').pipe(
      map(tasks => {
        if (tasks.length) return tasks;
        return null;
      })
    );
  }

  ngOnInit(): void {
  }

}
