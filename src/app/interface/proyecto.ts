export interface ProyectoInterface {
  id: number;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  estado: string; // Estado del proyecto: "Completado", "En progreso", "En espera", etc.
  enlace: string; // Enlace al proyecto o repositorio
  imagen: string; // URL de la imagen del proyecto
}
