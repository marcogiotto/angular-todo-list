import { taskStatus } from './../../components/home/models/task-status';
import { createAction, props } from "@ngrx/store";

export const addTask = createAction(
    '[Todo] create task',
    props<{ taskName: string }>()
);

export const deleteTask = createAction(
    '[Todo] delete task',
    props<{ taskId: number }>()
);

export const changeStatusTask = createAction(
    '[Todo] change status task',
    props<{ taskId: number, taskStatus: taskStatus }>()
)