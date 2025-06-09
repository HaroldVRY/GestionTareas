import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreMiRoutingModule } from './sobre-mi-routing.module';
import { DescriptionComponent } from './components/description/description.component';
import { PrimeNG } from 'primeng/config';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    SobreMiRoutingModule,
    PrimeNgModule
  ]
})
export class SobreMiModule { }
