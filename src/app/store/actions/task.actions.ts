import { createAction, props } from "@ngrx/store";

export const addTask = createAction(
    '[Todo] create task',
    props<{ taskName: string }>()
);