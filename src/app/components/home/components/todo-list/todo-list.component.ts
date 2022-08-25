import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Tasks } from './../../../../store/reducers/task.reducer';
import { loadTasks } from './../../../../store/actions/task.actions';
import { AppState } from './../../../../store/app.state';
import { filters } from 'src/app/store/reducers/filter.reducer';

import { Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {


  tasksState$: Observable<Tasks>;
  filters: filters = { status: null, search: null };
  private filtersSub: Subscription;

  constructor(private store: Store<AppState>) {

    this.store.dispatch(loadTasks());
    this.tasksState$ = this.store.select('tasks').pipe(
      tap(data => console.log(data))
    );

    this.filtersSub = this.store.select('filters').subscribe(val => {
      this.filters = val;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.filtersSub.unsubscribe();
  }
}
