import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { RouterModule, Routes } from '@angular/router';

const routerConfig: Routes = [
  { "path": "tasks", "component": TasksComponent },
  { "path": "", "component": TasksComponent },
  { "path": "**", "component": TasksComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
