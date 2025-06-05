import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaTableComponent } from './module/tarea/tarea-table/tarea-table.component';

const routes: Routes = [
  { path: '', redirectTo:'tarea', pathMatch: 'full'},
  {path:'tarea', component: TareaTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
