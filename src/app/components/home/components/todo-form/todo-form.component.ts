import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm = new FormGroup({
    task: new FormControl('', Validators.required)
  })

  constructor() { }


  ngOnInit(): void {
  }

  onSubmitForm() {
    console.log(this.todoForm.get('task'));
  }
}
