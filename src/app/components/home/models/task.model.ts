import { taskStatus } from './task-status';

export class Task {

    constructor(
        private name: string,
        private status: taskStatus = taskStatus.doing,
        private id: number = new Date().getTime(),
    ) { }
}