import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    TeachersComponent,
    CreateComponent,
    ListComponent,
    DetailComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
