import { TaskModel } from './../../components/home/models/task.model';
import { taskStatus } from './../../components/home/models/task-status';
import { createAction, props } from "@ngrx/store";


export const loadTasks = createAction('[Todo] load tasks');

export const loadTasksSuccess = createAction(
    ' [Todo] load tasks success',
    props<{ tasks: TaskModel[] }>()
);

export const addTaskInit = createAction(
    '[Todo] add task init',
    props<{ taskName: string }>()
);

export const addTask = createAction(
    '[Todo] create task',
    props<{ taskName: string }>()
);

export const addTaskSuccess = createAction('[Todo] add task success');


export const deleteTaskInit = createAction(
    '[Todo] delte task init',
    props<{ taskId: number }>()
)

export const deleteTask = createAction(
    '[Todo] delete task',
    props<{ taskId: number }>()
);

export const deleteTaskSuccess = createAction('[Todo] delete task success');

export const changeStatusTask = createAction(
    '[Todo] change status task',
    props<{ taskId: number, taskStatus: taskStatus }>()
)