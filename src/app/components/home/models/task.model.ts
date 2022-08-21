import { taskStatus } from './task-status';

export class TaskModel {

    constructor(
        public name: string,
        public status: taskStatus = taskStatus.doing,
        public id: number = new Date().getTime(),
    ) { }
}