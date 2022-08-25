import { TaskModel } from './../../components/home/models/task.model';
import { createReducer, on } from "@ngrx/store";
import * as taskActions from '../actions/task.actions';



export interface Tasks {
    tasks: TaskModel[],
    loading: boolean,
    creating: boolean,
    deleting: boolean,
    updating: boolean,

}


export const initialState: Tasks = {
    tasks: [],
    loading: false,
    creating: false,
    deleting: false,
    updating: false
};

export const taskReducer = createReducer(
    initialState,
    on(taskActions.loadTasks, (state) => ({ ...state, loading: true })),
    on(taskActions.loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks: tasks, loading: false })),
    on(taskActions.addTaskInit, (state, { taskName }) => ({ ...state, creating: true })),
    on(taskActions.addTask, (state, { taskName }) => {
        const newTask = new TaskModel(taskName);
        return {
            ...state,
            tasks: [newTask, ...state.tasks]
        }
    }),
    on(taskActions.addTaskSuccess, (state) => ({ ...state, creating: false })),
    on(taskActions.deleteTaskInit, (state, { taskId }) => ({ ...state, deleting: true })),
    on(taskActions.deleteTask, (state, { taskId }) => {
        return {
            ...state,
            tasks: [...state.tasks].filter(item => item.id !== taskId)
        }
    }),
    on(taskActions.deleteTaskSuccess, (state) => ({ ...state, deleting: false })),
    on(taskActions.changeStatusTaskInit, (state, { taskId, taskStatus }) => ({ ...state, updating: true })),
    on(taskActions.changeStatusTask, (state, { taskId, taskStatus }) => {
        return {
            ...state,
            tasks: state.tasks.map(item => {
                console.log(item, taskStatus);
                if (item.id === taskId) {
                    return {
                        ...item,
                        status: taskStatus
                    }
                }
                return item;
            })
        }
    }),
    on(taskActions.changeStatusTaskSuccess, (state) => ({ ...state, updating: false }))
)
