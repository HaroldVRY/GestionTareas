import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectCardsComponent } from './components/proyect-cards/proyect-cards.component';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    ProyectCardsComponent
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    PrimeNgModule
  ]
})
export class ProyectosModule { }
