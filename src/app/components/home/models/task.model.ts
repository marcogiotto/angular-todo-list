import { taskStatus } from './task-status.model';

export class TaskModel {

    constructor(
        public name: string,
        public status: taskStatus = taskStatus.doing,
        public id: number = new Date().getTime(),
    ) { }
}