import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent implements OnInit {
  taskName: FormControl;
  taskStatus: FormControl;
  constructor() {
    this.taskName = new FormControl('');
    this.taskStatus = new FormControl('');
  }

  ngOnInit(): void {
  }

}
