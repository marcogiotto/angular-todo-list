import { filterReducer, filters } from './reducers/filter.reducer';
import { taskReducer, Tasks } from './reducers/task.reducer';
import { ActionReducerMap } from "@ngrx/store"

export interface AppState {
    tasks: Tasks,
    filters: filters
}


export const appReducers: ActionReducerMap<AppState> = {
    tasks: taskReducer,
    filters: filterReducer
};