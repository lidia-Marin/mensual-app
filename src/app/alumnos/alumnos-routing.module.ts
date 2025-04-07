import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoDetalleComponent } from './alumno-detalle/alumno-detalle.component';

const routes: Routes = [
  { path: ':id', component: AlumnoDetalleComponent } // Ruta dinámica para ver detalles del alumno
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule {}
