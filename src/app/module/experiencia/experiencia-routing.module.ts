import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceComponent } from './components/experience/experience.component';

const routes: Routes = [
  { path: '', redirectTo: 'experiencia', pathMatch: 'full' },
      { path: 'experiencia', component: ExperienceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class ExperienciaRoutingModule { }
