import { Component } from '@angular/core';

@Component({
  selector: 'app-arbol-habilidades',
  standalone: false,
  templateUrl: './arbol-habilidades.component.html',
  styleUrl: './arbol-habilidades.component.css'
})
export class ArbolHabilidadesComponent {
  // Sección de lenguajes de programación
  lenguajes: string[] = ['JavaScript', 'Python', 'Java', 'TypeScript', 'CSS', 'SQL'];

  // Sección de frameworks y bibliotecas
  frameworks: string[] = ['React', 'Node.js', 'PrimeNG', 'PrimeIcons', 'Bootstrap', 'Angular'];

  // Sección de herramientas y tecnologías
  herramientas: string[] = ['Git', 'Docker', 'Table Plus', 'PostgreSQL', 'MySQL', 'AWS', 'Postman'];

  // Sección de Diseño y UX/UI
  diseno: string[] = ['Figma','Adobe XD', 'Principios de diseño responsivo', 'Wireframes', 'Prototipos'];

}
