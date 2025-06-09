import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducacionRoutingModule } from './educacion-routing.module';

import { EducationComponent } from './components/education/education.component';


@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    EducacionRoutingModule
  ]
})
export class EducacionModule { }
