import { AppState } from './../../../../store/app.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import { addTask, addTaskInit } from 'src/app/store/actions/task.actions';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnDestroy {

  todoForm: FormGroup;
  taskValid = false;
  private unsubscribe$ = new Subject();

  constructor(private store: Store<AppState>) {
    this.todoForm = new FormGroup({
      task: new FormControl('')
    });
  }


  ngOnInit(): void {
    this.listenToFormChange();
    this.store.select('tasks').pipe(
      tap(data => {
        console.log('from form', data.creating);
      })
    )
  }

  onSubmitForm() {
    const taskVal = this.todoForm.get('task')?.value;
    if (!taskVal) return;
    this.store.dispatch(addTaskInit({ taskName: taskVal }));
    this.todoForm.reset();
  }

  private listenToFormChange() {
    this.todoForm.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(val => {
      const taskVal = val.task?.trim();
      if (taskVal && taskVal.length > 3) {
        return this.taskValid = true;
      }
      return this.taskValid = false;

    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next('');
    this.unsubscribe$.complete();
  }

}
