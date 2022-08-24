import { TasksService } from './../../components/home/services/tasks.service';
import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as tasksActions from '../actions/task.actions';
import { mergeMap, map, tap } from 'rxjs';

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
                    map(tasks => tasksActions.loadTasksSuccess({ tasks: tasks }))
                )

            )
        )
    )

    addTask$ = createEffect(
        () => this.actions$.pipe(
            ofType(tasksActions.addTaskInit),
            mergeMap(
                ({ taskName }) => this.tasksService.onAddTask(taskName).pipe(
                    map(res => tasksActions.addTaskSuccess())
                )
            )
        )
    );

    deleteTask$ = createEffect(
        () => this.actions$.pipe(
            ofType(tasksActions.deleteTaskInit),
            mergeMap(
                ({ taskId }) => this.tasksService.onDeleteTask(taskId).pipe(
                    map(res => tasksActions.deleteTaskSuccess())
                )
            )
        )
    );

    updateTask$ = createEffect(
        () => this.actions$.pipe(
            ofType(tasksActions.changeStatusTaskInit),
            mergeMap(
                ({ taskId, taskStatus }) => this.tasksService.onUpdateTask(taskId, taskStatus).pipe(
                    map(res => tasksActions.changeStatusTaskSuccess())
                )
            )
        )
    )

}