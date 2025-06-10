import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PrimeNgModule,
  ],
  exports: [SidebarComponent]
})
export class CoreModule { }
