import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GradesComponent } from './grades.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { path: '', component: GradesComponent }, // Ruta base para Grades
  { path: 'create', component: CreateComponent }, // Crear un grado
  { path: 'list', component: ListComponent }, // Listar todos los grados
  { path: 'detail/:id', component: DetailComponent }, // Detalles de un grado específico
  { path: 'update/:id', component: UpdateComponent }, // Actualizar un grado específico
  { path: 'delete/:id', component: DeleteComponent } // Eliminar un grado específico
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradesRoutingModule { }
