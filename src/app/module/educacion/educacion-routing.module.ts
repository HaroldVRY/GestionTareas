import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';

const routes: Routes = [
  { path: '', redirectTo: 'educacion', pathMatch: 'full' },
        { path: 'educacion', component: EducationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class EducacionRoutingModule { }
