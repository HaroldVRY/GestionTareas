import { Component } from '@angular/core';
import { TareaInterface } from '../../../interface/tarea-interface';

@Component({
  selector: 'app-tarea-table',
  standalone: false,
  templateUrl: './tarea-table.component.html',
  styleUrl: './tarea-table.component.css'
})
export class TareaTableComponent {
  tareas: TareaInterface[] = [];
  nuevaTarea: string = '';
  private contadorId = 1;

  agregarTarea(): void {
    if (this.nuevaTarea.trim()) {
      const tarea: TareaInterface = {
        id: this.contadorId++,
        tarea: this.nuevaTarea.trim(),
        completado: false
      };
      this.tareas.push(tarea);
      this.nuevaTarea = '';
    }
  }

  onCompletarTarea(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completado = true;
    }
  }

  onEliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

}
