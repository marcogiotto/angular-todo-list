import { addTask, deleteTask } from 'src/app/store/actions/task.actions';
import { TaskModel } from './../models/task.model';
import { Injectable } from '@angular/core';

import { AppState } from './../../../store/app.state';
import { Store } from '@ngrx/store';

import { delay, map, Observable, of, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private store: Store<AppState>) { }

  getTasks(): Observable<TaskModel[]> {
    return this.store.select('tasks').pipe(
      take(1),
      delay(2000),
      map(data => data.tasks)
    );
  }

  onAddTask(taskName: string): Observable<boolean> {
    return of(true).pipe(
      delay(2000),
      tap(() => {
        this.store.dispatch(addTask({ taskName: taskName }));
      })
    )

  }

  onDeleteTask(taskId: number): Observable<boolean> {
    return of(true).pipe(
      delay(2000),
      tap(() => this.store.dispatch(deleteTask({ taskId: taskId })))
    )
  }

}
