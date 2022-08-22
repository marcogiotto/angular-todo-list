import { TaskModel } from './../../components/home/models/task.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: TaskModel[], ...args: unknown[]): unknown {
    return null;
  }

}
