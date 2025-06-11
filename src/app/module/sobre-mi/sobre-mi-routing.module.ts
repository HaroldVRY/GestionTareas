import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './components/description/description.component';

const routes: Routes = [
  { path: '', redirectTo: 'sobre-mi', pathMatch: 'full' },
      { path: 'sobre-mi', component: DescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobreMiRoutingModule { }
