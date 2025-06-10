import { Injectable } from '@angular/core';
import { MenuElemento } from '../interface/core.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  items: MenuElemento[] = [
    {
      nombre: 'Sobre mí',
      ruta: '/sobre-mi',
      iconRef: 'iconInicio'
    },
    {
      nombre: 'Proyectos',
      ruta: '/proyectos',
      iconRef: 'iconHilo'
    },
    {
      nombre: 'Habilidades',
      ruta: '/habilidades',
     iconRef: 'iconCroco'
    },
    {
      nombre: 'Educación',
      ruta: '/educacion',
     iconRef: 'iconCroco'
    },
    {
      nombre: 'Experiencia',
      ruta: '/experiencia',
     iconRef: 'iconCroco'
    },
    {
      nombre: 'Contáctame',
      ruta: '/contactame',
     iconRef: 'iconCroco'
    },

  ]

  getMenuItems(): MenuElemento[] {
    return this.items;
  }
}
