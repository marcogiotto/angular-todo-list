import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoFiltersComponent } from './components/todo-filters/todo-filters.component';


@NgModule({
  declarations: [
    HomeComponent,
    TodoFormComponent,
    TodoFiltersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
