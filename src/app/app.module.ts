import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}