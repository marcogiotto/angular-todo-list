import { createAction, props } from '@ngrx/store';

export const setFilter = createAction(
    '[Filter] set filter',
    props<{ status: string | null, search: string | null }>()
)