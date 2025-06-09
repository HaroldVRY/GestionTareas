import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactameRoutingModule } from './contactame-routing.module';

import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactameRoutingModule
  ]
})
export class ContactameModule { }
