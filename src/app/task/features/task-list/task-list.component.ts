import { Component, inject } from '@angular/core';
import { TableComponent } from '../../ui/table/table.component';
import { RouterLink } from '@angular/router';
import { alumnos, TaskService } from '../../data-access/task.service';

@Component({
  selector: 'app-task-list',
  standalone:true,
  imports: [TableComponent, RouterLink],
  templateUrl: './task-list.component.html',
  styles: ``,
})
export default class TaskListComponent {
  private _taskService = inject (TaskService);
  alumnos: alumnos [] =[];

  ngOnInit() {
    this._taskService.getAll().subscribe(data => {
      this.alumnos = data;
    });
  }

}
