import { TaskModel } from './../models/task.model';
import { Injectable } from '@angular/core';

import { AppState } from './../../../store/app.state';
import { Store } from '@ngrx/store';

import { delay, map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private store: Store<AppState>) { }

  getTasks(): Observable<TaskModel[]> {
    return this.store.select('tasks').pipe(
      take(1),
      delay(5000),
      map(data => data.tasks)
    );
  }
}
