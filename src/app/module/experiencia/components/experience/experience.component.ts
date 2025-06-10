import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiencia = {
    empresa: 'Industrias Nettalco S.A.',
    puesto: 'Practicante de TI',
    fechaInicio: '2 de junio del 2025',
    fechaFin: 'Actualidad',
    responsabilidades: [
      'Desarrollo y mantenimiento de aplicaciones web utilizando tecnologías como Angular y Node.js.',
      'Soporte en la integración de sistemas y mejora de infraestructuras tecnológicas.',
      'Gestión y análisis de datos utilizando herramientas de bases de datos SQL.',
      'Colaboración en proyectos para mejorar la eficiencia operativa dentro de la empresa.'
    ],
    logros: [
      'Implementación de una nueva funcionalidad en la aplicación web que permitió mejorar la experiencia de usuario en un 25%.',
      'Optimización de procesos internos que redujeron el tiempo de carga de la base de datos en un 30%.',
      'Desarrollo de una herramienta de análisis de datos que facilitó la toma de decisiones en tiempo real.'
    ]
  };

}
