import { Routes } from "@angular/router";
import path from "path";

export default [
    {
        path: '',
        loadComponent: () => import('./task-list/task-list.component'),
    },
    {
        path:'new',
        loadComponent: () => import('./task-form/task-form.component'),
    },
    {
        path:'edit/:id',
        loadComponent: () => import('./task-form/task-form.component'),
    },
    {
        path: ':id',
        loadComponent: () => import('../../alumnos/alumno-detalle/alumno-detalle.component').then(m => m.AlumnoDetalleComponent),
    },
    
]as Routes;