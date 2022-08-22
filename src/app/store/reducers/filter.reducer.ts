import { createReducer, on } from '@ngrx/store';
import { taskStatus } from './../../components/home/models/task-status';
import * as filterActions from '../actions/filter.actions';


export interface filters {
    status: string | null,
    search: string | null,
}

export const initialState: filters = {
    status: taskStatus.all,
    search: null
};

export const filterReducer = createReducer(
    initialState,
    on(filterActions.setFilter, (state, { status, search }) => {
        return {
            ...state,
            status: status,
            search: search
        }

    })
)