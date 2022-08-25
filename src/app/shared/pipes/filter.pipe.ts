import { filterStatus } from './../../components/home/models/filter-status.model';
import { TaskModel } from './../../components/home/models/task.model';
import { Pipe, PipeTransform } from '@angular/core';
import { filters } from 'src/app/store/reducers/filter.reducer';



@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: TaskModel[], filters: filters): any {
    const { status, search } = filters;
    if (search && status && status !== filterStatus.all) {
      return tasks.filter(item => item.status === status && item.name.includes(search))
    }

    if (status && status !== filterStatus.all) {
      return tasks.filter(item => item.status === status);
    }

    if (search) {
      return tasks.filter(item => item.name.includes(search));
    }

    return tasks;
  }

}
