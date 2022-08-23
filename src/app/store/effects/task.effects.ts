import { TasksService } from './../../components/home/services/tasks.service';
import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as tasksActions from '../actions/task.actions';
import { mergeMap, map, tap, catchError, of } from 'rxjs';

@Injectable()
export class TaskEffects {

    constructor(
        private actions$: Actions,
        private tasksService: TasksService
    ) { }

    loadTasks$ = createEffect(
        () => this.actions$.pipe(
            ofType(tasksActions.loadTasks),
            tap(data => console.log(data)),
            mergeMap(
                () => this.tasksService.getTasks().pipe(
                    map(tasks => tasksActions.loadTasksSuccess({ tasks: tasks })),
                    catchError(err => of(tasksActions.loadTasksError({ payload: err })))
                )

            )
        )
    )
}