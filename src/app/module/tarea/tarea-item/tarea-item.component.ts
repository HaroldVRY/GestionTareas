import { Component, Input , Output, EventEmitter } from '@angular/core';
import { TareaTableComponent } from '../tarea-table/tarea-table.component';
import { TareaInterface } from '../../../interface/tarea-interface';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tarea-item',
  standalone: false,
  templateUrl: './tarea-item.component.html',
  styleUrl: './tarea-item.component.css',
})
export class TareaItemComponent {
  @Input() tarea!: TareaInterface;
  @Output() completar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();

  onCompletar(): void {
    this.completar.emit(this.tarea.id);
  }

  onEliminar(): void {
    this.eliminar.emit(this.tarea.id);
  }

}
