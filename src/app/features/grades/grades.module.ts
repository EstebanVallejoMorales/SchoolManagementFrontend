import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradesRoutingModule } from './grades-routing.module';
import { GradesComponent } from './grades.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    GradesComponent,
    CreateComponent,
    ListComponent,
    DetailComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    GradesRoutingModule
  ]
})
export class GradesModule { }
