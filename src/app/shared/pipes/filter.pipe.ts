import { State } from '@ngrx/store';
import { TaskModel } from './../../components/home/models/task.model';
import { Pipe, PipeTransform } from '@angular/core';
import { filters } from 'src/app/store/reducers/filter.reducer';
import { filter } from 'rxjs';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: TaskModel[], filters: filters): any {
    console.log(tasks, filters)
    const { status, search } = filters;
    if (search && status) {
      return tasks.filter(item => item.status === status && item.name.includes(search))
    }

    if (status) {
      return tasks.filter(item => item.status === status);
    }

    if (search) {
      return tasks.filter(item => item.name.includes(search));
    }

    return tasks;
  }

}
