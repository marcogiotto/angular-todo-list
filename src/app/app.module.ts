import { TaskEffects } from './store/effects/task.effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule, } from '@ngrx/store';
import { appReducers } from './store/app.state';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    EffectsModule.forRoot([TaskEffects]),
    StoreModule.forRoot(appReducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
