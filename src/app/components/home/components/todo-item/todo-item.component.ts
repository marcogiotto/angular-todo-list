import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from './../../../../store/app.state';
import { TaskModel } from './../../models/task.model';
import { FormControl } from '@angular/forms';
import * as taskActions from '../../../../store/actions/task.actions';
import { taskStatus } from '../../models/task-status.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, OnDestroy {
  taskCompleted = taskStatus.complete;
  taskStatus: FormControl;
  private unsubscribe$ = new Subject();
  @Input('item') task: TaskModel | undefined;


  constructor(private store: Store<AppState>) {
    this.taskStatus = new FormControl('');
  }

  ngOnInit(): void {
    console.log(this.task);
    this.taskStatus.setValue(this.task?.status);
    this.listenToStatusChange();
  }

  onTaskDelete() {
    const taskId = this.task?.id;
    if (!taskId) return;
    if (!confirm(`Are you shure you want to delete task: ${this.task?.name}`)) return;
    this.store.dispatch(taskActions.deleteTaskInit({ taskId: taskId }));
  }


  private listenToStatusChange() {
    const taskId = this.task?.id;
    if (!taskId) return;
    this.taskStatus.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(val => {
      this.store.dispatch(taskActions.changeStatusTaskInit({ taskId: taskId, taskStatus: val }));
    })
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next('');
    this.unsubscribe$.complete();
  }

}
