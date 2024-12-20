import { Component } from '@angular/core';
import { StudentService } from 'src/app/api/services';
import { StudentViewModelResponseDto } from 'src/app/api/models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  studentId?: number;
  student?: StudentViewModelResponseDto['data'];
  errorMessage: string = '';

  constructor(private readonly studentsService: StudentService) {}

  onSearch() {
    if (this.studentId) {
      this.studentsService.apiStudentGetAllStudentsStudentIdGet$Json({ studentId: this.studentId })
        .subscribe({
          next: (response) => {
            this.student = response.data;
            this.errorMessage = '';
          },
          error: (error) => {
            this.student = undefined;
            this.errorMessage = 'Student not found.';
          }
        });
    }
  }
}
