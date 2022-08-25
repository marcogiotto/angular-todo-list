import { createAction, props } from '@ngrx/store';
import { statusState } from 'src/app/components/home/models/filter-status.model';

export const setFilter = createAction(
    '[Filter] set filter',
    props<{ status: statusState | null, search: string | null }>()
)