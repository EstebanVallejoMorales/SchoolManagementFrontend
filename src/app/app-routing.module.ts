import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'grades', loadChildren: () => import('./features/grades/grades.module').then(m => m.GradesModule) },
  { path: 'groups', loadChildren: () => import('./features/groups/groups.module').then(m => m.GroupsModule) },
  { path: 'students', loadChildren: () => import('./features/students/students.module').then(m => m.StudentsModule) },
  { path: 'teachers', loadChildren: () => import('./features/teachers/teachers.module').then(m => m.TeachersModule) },
  { path: '', redirectTo: '/grades', pathMatch: 'full' }, // Redirige a Grades solo al inicio
  //{ path: '**', redirectTo: '/grades' } // Cualquier ruta no encontrada redirige a Grades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
