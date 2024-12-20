import { Int32ResponseDto } from './src/api/models/int-32-response-dto';
import { Component } from '@angular/core';
import { StudentService } from './src/api/services';
import { Student } from './src/api/models/student';
import { StudentIEnumerableResponseDto } from './src/api/models/student-i-enumerable-response-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SchoolManagementFrontend';
  public responseDto: StudentIEnumerableResponseDto = {};
  public students: Student[] | null | undefined = [];

  public constructor(private readonly api : StudentService)
  {
    this.api.apiStudentGetAllStudentsGet$Json().subscribe(res => {
      this.responseDto = res;
      this.students = this.responseDto.data;
    })
  }
}
