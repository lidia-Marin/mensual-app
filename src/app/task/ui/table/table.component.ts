import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() alumnos: any[] = []; // Recibe la lista de alumnos desde el padre

  constructor(private router: Router) {}

  verAlumno(alumno: any) {
    this.router.navigate(['/tasks', alumno.id]); // Redirige a la vista del alumno
  }
  editarAlumno(alumno: any) {
    this.router.navigate(['/tasks/edit', alumno.id]); // Ruta para edición
  }

}
