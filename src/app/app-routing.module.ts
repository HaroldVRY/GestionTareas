import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaTableComponent } from './module/tarea/tarea-table/tarea-table.component';
import { SobreMiModule } from './module/sobre-mi/sobre-mi.module';

const routes: Routes = [
  { path: '', redirectTo:'tarea', pathMatch: 'full'},
  {path:'tarea', component: TareaTableComponent},
  {
  path: 'sobre-mi',
  loadChildren: () => import('./module/sobre-mi/sobre-mi.module').then(m => m.SobreMiModule),
  },
  {
  path: 'proyectos',
  loadChildren: () => import('./module/proyectos/proyectos.module').then(m => m.ProyectosModule),
  },
  {
  path: 'habilidades',
  loadChildren: () => import('./module/habilidades/habilidades.module').then(m => m.HabilidadesModule),
  },
  {
  path: 'educacion',
  loadChildren: () => import('./module/educacion/educacion.module').then(m => m.EducacionModule),
  },
  {
  path: 'experiencia',
  loadChildren: () => import('./module/experiencia/experiencia.module').then(m => m.ExperienciaModule),
  },
  {
  path: 'contactame',
  loadChildren: () => import('./module/contactame/contactame.module').then(m => m.ContactameModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
