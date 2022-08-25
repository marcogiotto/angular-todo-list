import { filterStatus } from './../../models/filter-status.model';
import { AppState } from './../../../../store/app.state';
import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { taskStatus } from '../../models/task-status.model';
import { Subject, take, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { setFilter } from 'src/app/store/actions/filter.actions';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent implements OnInit, OnDestroy {
  taskName: FormControl<string | null>;
  taskStatus: FormControl<filterStatus | null>;
  private unsubscribe$ = new Subject();

  constructor(private store: Store<AppState>) {
    this.taskName = new FormControl('');
    this.taskStatus = new FormControl(filterStatus.all);
  }

  ngOnInit(): void {
    this.listenTotaskNameChange();
    this.listenToTaskStatusChange();
  }

  private listenTotaskNameChange() {

    this.taskName.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(val => {
      const statusVal = this.taskStatus.value;
      this.store.dispatch(setFilter({ status: statusVal, search: val }));
    })
  }

  private listenToTaskStatusChange() {

    this.taskStatus.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(val => {
      const searchTerm = this.taskName.value;
      this.store.dispatch(setFilter({ status: val, search: searchTerm }));
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next('');
    this.unsubscribe$.complete();
  }

}
