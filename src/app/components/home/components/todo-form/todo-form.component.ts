import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnDestroy {

  todoForm: FormGroup;
  taskValid = false;
  private unsubscribe$ = new Subject();
  constructor() {
    this.todoForm = new FormGroup({
      task: new FormControl('')
    });
  }


  ngOnInit(): void {
    this.listenToFormChange();
  }

  onSubmitForm() {
    console.log(this.todoForm.get('task')?.value.trim());
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
