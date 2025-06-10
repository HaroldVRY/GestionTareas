import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabilidadesRoutingModule } from './habilidades-routing.module';
import { ArbolHabilidadesComponent } from './components/arbol-habilidades/arbol-habilidades.component';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    ArbolHabilidadesComponent
  ],
  imports: [
    CommonModule,
    HabilidadesRoutingModule,
    PrimeNgModule
  ]
})
export class HabilidadesModule { }
