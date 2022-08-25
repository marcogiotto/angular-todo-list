import { taskStatus } from './task-status.model';

export type statusState = filterStatus | taskStatus;

export enum filterStatus {
    all = '0',
    doing = '1',
    complete = '2',
    cancel = '3'
}