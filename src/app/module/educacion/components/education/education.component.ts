import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educacion = {
    colegios: [
      {
        nombre: 'Colegio Alfa Group',
        descripcion: 'Educación preuniversitaria con enfoque en formación integral y habilidades tecnológicas.',
        fechaInicio: '2016',
        fechaFin: '2021',
        titulo: 'Secundaria'
      }
    ],
    universidad: [
      {
        nombre: 'Universidad Nacional de Ingeniería (UNI)',
        carrera: 'Ingeniería de Sistemas',
        ciclo: '7mo ciclo',
        fechaInicio: '2021',
        fechaFin: 'Actualidad',
        descripcion: 'Estudios en Ingeniería de Sistemas con enfoque en programación, bases de datos y sistemas informáticos.'
      }
    ],
    cursos: [
      {
        nombre: 'Especializacista en Excel',
        institucion: 'Sistemas UNI',
        descripcion: 'Curso de Excel enfocado en su aplicación para sistemas y manejo de grandes volúmenes de datos.',
        fecha: '2024'
      }
    ],
    certificaciones: [
      {
        nombre: 'SQL Avanzado',
        institucion: 'Udemy',
        enlace: 'https://www.udemy.com/certificate/UC-ed7cb4eb-399d-4077-962b-b97ac0f45c80/'
      },
      {
        nombre: 'AWS Cloud Fundations',
        institucion: 'AWS Academy',
        enlace: 'https://www.credly.com/badges/a510fbf9-e0ee-4af9-b192-64a7ff3aa4ae/linked_in_profile'
      },
      {
        nombre: 'Inglés Básico',
        institucion: 'Británico',
        enlace: 'https://drive.google.com/file/d/13pLtQDLkZe_6-_YkJ5PWuE2brVmB-g9X/view'
      }
    ]
  };

}
