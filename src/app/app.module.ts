import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaTableComponent } from './module/tarea/tarea-table/tarea-table.component';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TareaItemComponent } from './module/tarea/tarea-item/tarea-item.component';
import { CardModule } from 'primeng/card';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { PrimeIcons } from 'primeng/api';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { DescriptionComponent } from './module/sobre-mi/components/description/description.component';
import { ProyectCardsComponent } from './module/proyectos/components/proyect-cards/proyect-cards.component';
import { ArbolHabilidadesComponent } from './module/habilidades/components/arbol-habilidades/arbol-habilidades.component';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    TareaTableComponent,
    TareaItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    AvatarModule,
    ToolbarModule,
  ],
  providers: [
    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
