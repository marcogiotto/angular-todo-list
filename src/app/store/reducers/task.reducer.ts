import { Task } from './../../components/home/models/task.model';
import { createReducer, on } from "@ngrx/store";
import * as taskActions from '../actions/task.actions';

export const initialState: Task[] = [];

export const taskReducer = createReducer(
    initialState,
    on(taskActions.addTask, (state, { taskName }) => [...state, new Task(taskName)])
)