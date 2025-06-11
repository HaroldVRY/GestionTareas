import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbolHabilidadesComponent } from './components/arbol-habilidades/arbol-habilidades.component';

const routes: Routes = [
  { path: '', redirectTo: 'habilidades', pathMatch: 'full' },
    { path: 'habilidades', component: ArbolHabilidadesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabilidadesRoutingModule { }
