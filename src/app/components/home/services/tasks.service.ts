import { Injectable } from '@angular/core';

import { taskStatus } from '../models/task-status.model';

import { AppState } from './../../../store/app.state';
import { Store } from '@ngrx/store';
import { changeStatusTask } from './../../../store/actions/task.actions';
import { addTask, deleteTask } from 'src/app/store/actions/task.actions';
import { TaskModel } from './../models/task.model';

import { delay, map, Observable, of, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private time: number = 1500;
  constructor(private store: Store<AppState>) { }

  getTasks(): Observable<TaskModel[]> {
    return this.store.select('tasks').pipe(
      take(1),
      delay(this.time),
      map(data => data.tasks)
    );
  }

  onAddTask(taskName: string): Observable<boolean> {
    return of(true).pipe(
      delay(this.time),
      tap(() => {
        this.store.dispatch(addTask({ taskName: taskName }));
      })
    )

  }

  onDeleteTask(taskId: number): Observable<boolean> {
    return of(true).pipe(
      delay(this.time),
      tap(() => this.store.dispatch(deleteTask({ taskId: taskId })))
    )
  }

  onUpdateTask(taskId: number, taskStatus: taskStatus): Observable<boolean> {
    return of(true).pipe(
      delay(this.time),
      tap(() => this.store.dispatch(changeStatusTask({ taskId, taskStatus })))
    )
  }

}
