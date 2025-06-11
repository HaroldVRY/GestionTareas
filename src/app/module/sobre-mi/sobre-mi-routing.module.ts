import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './components/description/description.component';

const routes: Routes = [
  { path: '', redirectTo: 'sobre-mi', pathMatch: 'full' },
      { path: 'sobre-mi', component: DescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class SobreMiRoutingModule { }
