import { Component } from '@angular/core';
import { ProyectoInterface } from '../../../../interface/proyecto';

@Component({
  selector: 'app-proyect-cards',
  standalone: false,
  templateUrl: './proyect-cards.component.html',
  styleUrl: './proyect-cards.component.css'
})
export class ProyectCardsComponent {
  // Lista de proyectos (con imágenes diferentes para cada uno)
  proyectos: ProyectoInterface[] = [
    {
      id: 1,
      nombre: 'WasiGuard: Sistema Inteligente de Predicción y Alerta de Huaicos',
      descripcion: 'Sistema integral de monitoreo, simulación y alerta temprana de huaicos en zonas vulnerables del Perú, combinando análisis geoespacial, modelado de desastres naturales y tecnologías de visualización.',
      tecnologias: ['Python', 'GeoPandas', 'Jupyter Notebooks', 'Shapely', 'Scipy', 'Matplotlib'],
      estado: 'Completado',
      enlace: 'https://github.com/HaroldVRY/WASIGUARD',
      imagen: 'Wasiguard.PNG' // Imagen para WasiGuard
    },
    {
      id: 2,
      nombre: 'Portafolio: Plataforma Interactiva',
      descripcion: 'Este es el portafolio personal de Harold Reyna, un desarrollador web full-stack. Aquí podrás explorar sus proyectos, habilidades y experiencia en el desarrollo de aplicaciones web tanto en front-end como en back-end.',
      tecnologias: ['Angular', 'Node.js', 'PrimeIcons', 'Bootstrap', 'PrimeNG'],
      estado: 'En progreso',
      enlace: 'https://github.com/HaroldVRY/GestionTareas',
      imagen: 'codigo.png' // Imagen para el portafolio
    },
    {
      id: 3,
      nombre: 'Módulo de Almacenamiento: Castro Contrastistas Ingenieros S.A.C.',
      descripcion: 'Desarrollo de un sistema de inventario y gestión de materiales, incluyendo funcionalidades de recepción y entrega de materiales, ajuste de inventario y reabastecimiento automatizado.',
      tecnologias: ['Java', 'Spring Boot', 'PostgreSQL'],
      estado: 'Completado',
      enlace: 'https://github.com/HaroldVRY/Modulo-de-Inventario',
      imagen: 'https://cdn-icons-png.flaticon.com/512/5164/5164023.png' // Imagen para el proyecto de gestión de inventarios
    },
    {
      id: 4,
      nombre: 'Prabstract – Automatización de Documentos Judiciales en Perú',
      descripcion: 'Sistema RPA para la automatización de la recopilación, análisis y categorización de documentos judiciales del Poder Judicial del Perú. Extracción de datos usando IA, generación de reportes y envíos automáticos de correos electrónicos.',
      tecnologias: ['Python', 'OpenAI', 'Selenium', 'pdfplumber', 'pandas', 'matplotlib'],
      estado: 'En progreso',
      enlace: 'https://github.com/HaroldVRY/Prabstract',
      imagen: 'rpa.png' // Imagen para el proyecto Prabstract
    },
    {
      id: 5,
      nombre: 'Aplicación de Gestión de Tareas',
      descripcion: 'Una aplicación de tareas con autenticación, para gestionar tareas diarias.',
      tecnologias: ['React', 'Node.js', 'MongoDB'],
      estado: 'Completado',
      enlace: 'https://github.com/haroldreyna/tarea-app',
      imagen: 'https://via.placeholder.com/200?text=Task+Manager' // Imagen para el proyecto de gestión de tareas
    },
    {
      id: 6,
      nombre: 'Portal de Blog',
      descripcion: 'Sistema de blogs con funcionalidad para crear, editar y eliminar entradas.',
      tecnologias: ['Angular', 'Express.js', 'MongoDB'],
      estado: 'En progreso',
      enlace: 'https://github.com/haroldreyna/blog-portal',
      imagen: 'https://via.placeholder.com/200?text=Blog+Portal' // Imagen para el portal de blog
    },
    {
      id: 7,
      nombre: 'E-commerce',
      descripcion: 'Plataforma de e-commerce que permite la compra de productos online.',
      tecnologias: ['Vue.js', 'Node.js', 'MySQL'],
      estado: 'En espera',
      enlace: 'https://github.com/haroldreyna/e-commerce',
      imagen: 'https://via.placeholder.com/200?text=E-commerce' // Imagen para el proyecto de e-commerce
    },

    ];
}
