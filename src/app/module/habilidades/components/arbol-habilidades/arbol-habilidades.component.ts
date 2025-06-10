import { Component } from '@angular/core';

@Component({
  selector: 'app-arbol-habilidades',
  standalone: false,
  templateUrl: './arbol-habilidades.component.html',
  styleUrl: './arbol-habilidades.component.css'
})
export class ArbolHabilidadesComponent {
  // Sección de lenguajes de programación
  lenguajes: string[] = ['JavaScript', 'Python', 'PHP', 'TypeScript', 'Java'];

  // Sección de frameworks y bibliotecas
  frameworks: string[] = ['React', 'Node.js', 'Express', 'Laravel', 'Angular'];

  // Sección de herramientas y tecnologías
  herramientas: string[] = ['Git', 'Docker', 'MongoDB', 'PostgreSQL', 'MySQL', 'AWS'];

  // Sección de Diseño y UX/UI
  diseno: string[] = ['Figma', 'Adobe XD', 'Principios de diseño responsivo', 'Wireframes', 'Prototipos'];

}
