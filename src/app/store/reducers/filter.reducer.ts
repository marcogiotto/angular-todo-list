import { createReducer, on } from '@ngrx/store';
import { filterStatus, statusState } from 'src/app/components/home/models/filter-status.model';
import { taskStatus } from '../../components/home/models/task-status.model';
import * as filterActions from '../actions/filter.actions';


export interface filters {
    status: statusState | null,
    search: string | null,
}

export const initialState: filters = {
    status: filterStatus.all,
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