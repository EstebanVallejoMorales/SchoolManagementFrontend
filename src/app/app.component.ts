import { Component } from '@angular/core';
import { StudentService } from './src/api/services';
import { Student } from './src/api/models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SchoolManagementFrontend';
  public students: Student[] = [];
  public constructor(private api : StudentService)
  {
    this.api.getStudents$Json().subscribe(res => {
      this.students = res;
    })
  }
}
