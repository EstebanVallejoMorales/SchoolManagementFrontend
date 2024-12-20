import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    StudentsComponent,
    CreateComponent,
    ListComponent,
    DetailComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ]
})
export class StudentsModule { }
