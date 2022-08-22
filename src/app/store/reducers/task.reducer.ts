import { TaskModel } from './../../components/home/models/task.model';
import { createReducer, on } from "@ngrx/store";
import * as taskActions from '../actions/task.actions';

export const initialState: TaskModel[] = [];

export const taskReducer = createReducer(
    initialState,
    on(taskActions.addTask, (state, { taskName }) => [...state, new TaskModel(taskName)]),
    on(taskActions.deleteTask, (state, { taskId }) => state.filter(item => item.id !== taskId)),
    on(taskActions.changeStatusTask, (state, { taskId, taskStatus }) => {
        return state.map(item => {
            if (item.id === taskId) {
                return {
                    ...item,
                    status: taskStatus
                }
            }
            return item;

        });
    })
)
