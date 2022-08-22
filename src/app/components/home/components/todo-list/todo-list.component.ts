import { TaskModel } from './../../models/task.model';
import { AppState } from './../../../../store/app.state';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { filters } from 'src/app/store/reducers/filter.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  tasks$: Observable<TaskModel[] | null>;
  filters: filters = { status: null, search: null };
  private filtersSub: Subscription;
  constructor(private state: Store<AppState>) {

    this.tasks$ = this.state.select('tasks').pipe(
      map(tasks => {
        if (tasks.length) return tasks;
        return null;
      })
    );

    this.filtersSub = this.state.select('filters').subscribe(val => {
      this.filters = val;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.filtersSub.unsubscribe();
  }
}
