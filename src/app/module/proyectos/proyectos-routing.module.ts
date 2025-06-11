import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectCardsComponent } from './components/proyect-cards/proyect-cards.component';

const routes: Routes = [
  { path: '', redirectTo: 'proyectos', pathMatch: 'full' },
    { path: 'proyectos', component: ProyectCardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
