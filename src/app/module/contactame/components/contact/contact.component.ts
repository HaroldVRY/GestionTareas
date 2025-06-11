import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    // Enlaces a redes sociales
  redesSociales = [
    {
      nombre: 'LinkedIn',
      enlace: 'https://www.linkedin.com/in/harold-victor-reyna-yangali-226379143/',
      icono: 'pi pi-linkedin',
    },
    {
      nombre: 'GitHub',
      enlace: 'https://github.com/HaroldVRY',
      icono: 'pi pi-github',
    }
  ];

}
