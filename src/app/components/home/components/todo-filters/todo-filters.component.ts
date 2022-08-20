import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { taskStatus } from './../../models/task-status';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent implements OnInit, OnDestroy {
  taskName: FormControl<string | null>;
  taskStatus: FormControl<string | null>;
  private unsubscribe$ = new Subject();
  constructor() {
    this.taskName = new FormControl('');
    this.taskStatus = new FormControl(taskStatus.all);
  }

  ngOnInit(): void {
    this.listenTotaskNameChange();
    this.listenToTaskStatusChange();
  }

  private listenTotaskNameChange() {

    this.taskName.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(val => {
      console.log(val);
    })
  }

  private listenToTaskStatusChange() {

    this.taskStatus.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(val => {
      console.log(val);
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next('');
    this.unsubscribe$.complete();
  }

}
