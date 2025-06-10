import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PrimeNgModule,
    ToolbarModule
  ],
  exports: [SidebarComponent, ToolbarComponent]
})
export class CoreModule { }
