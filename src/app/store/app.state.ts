import { filterReducer, filters } from './reducers/filter.reducer';
import { taskReducer } from './reducers/task.reducer';
import { ActionReducerMap } from "@ngrx/store"
import { TaskModel } from "../components/home/models/task.model"
export interface AppState {
    tasks: TaskModel[],
    filters: filters
}


export const appReducers: ActionReducerMap<AppState> = {
    tasks: taskReducer,
    filters: filterReducer
};