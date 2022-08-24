import { TaskModel } from './../../components/home/models/task.model';
import { createReducer, on } from "@ngrx/store";
import * as taskActions from '../actions/task.actions';
import { state } from '@angular/animations';

export interface Tasks {
    tasks: TaskModel[],
    loading: boolean,
    loaded: boolean,
    error: {} | null,

}


export const initialState: Tasks = {
    tasks: [],
    loading: false,
    loaded: false,
    error: null,
};

export const taskReducer = createReducer(
    initialState,
    on(taskActions.loadTasks, (state) => ({ ...state, loading: true })),
    on(taskActions.loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks: tasks, loading: false, loaded: true })),
    on(taskActions.loadTasksError, (state, { payload }) => ({ ...state, loading: false, loaded: false, error: payload }))
    // on(taskActions.addTask, (state, { taskName }) => [...state, new TaskModel(taskName)]),
    // on(taskActions.deleteTask, (state, { taskId }) => state.filter(item => item.id !== taskId)),
    // on(taskActions.changeStatusTask, (state, { taskId, taskStatus }) => {
    //     return state.map(item => {
    //         if (item.id === taskId) {
    //             return {
    //                 ...item,
    //                 status: taskStatus
    //             }
    //         }
    //         return item;

    //     });
    // })
)
