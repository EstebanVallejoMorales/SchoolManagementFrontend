import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/api/services';
import { StudentViewModel, Int32ResponseDto, ErrorDto, StudentViewModelIEnumerableResponseDto } from 'src/app/api/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: StudentViewModel[] = []; // Lista de estudiantes
  editingStudent?: StudentViewModel; // Estudiante en edición
  successMessage: string = ''; // Mensaje de éxito
  errorMessage: string = ''; // Mensaje general de error
  detailedErrors: string[] = []; // Lista de errores detallados

  constructor(private readonly studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents(); // Carga inicial de estudiantes
  }

  private handleResponseMessages(response: Int32ResponseDto): void {
    this.successMessage = response.message || 'Operation completed successfully!';
    this.errorMessage = '';
    this.detailedErrors = response.errors
      ?.map((err: ErrorDto) => err.message)
      .filter((msg): msg is string => !!msg) || [];
  }

  private handleStudentListResponse(response: StudentViewModelIEnumerableResponseDto): void {
    this.successMessage = response.message || 'Students loaded successfully!';
    this.errorMessage = '';
    this.detailedErrors = response.errors
      ?.map((err: ErrorDto) => err.message)
      .filter((msg): msg is string => !!msg) || [];
    this.students = response.data || []; // Asigna la lista de estudiantes
  }

  private handleErrorResponse(error: any, defaultMessage: string): void {
    if (error.error) {
      const responseError = error.error as Int32ResponseDto;
      this.errorMessage = responseError.message || defaultMessage;
      this.detailedErrors = responseError.errors
        ?.map((err: ErrorDto) => err.message)
        .filter((msg): msg is string => !!msg) || [];
    } else {
      this.errorMessage = defaultMessage;
      this.detailedErrors = [];
    }
    this.successMessage = '';
  }

  loadStudents(): void {
    this.studentService.apiStudentGetAllStudentsGet$Json()
      .subscribe({
        next: (response: StudentViewModelIEnumerableResponseDto) => {
          this.handleStudentListResponse(response); // Llama al manejador específico
        },
        error: (error) => {
          this.handleErrorResponse(error, 'Failed to load students.'); // Reutiliza el método de error general
        }
      });
  }

  onEdit(student: StudentViewModel): void {
    this.editingStudent = { ...student }; // Copia los datos del estudiante a editar
  }

  onSave(): void {
    if (this.editingStudent) {
      this.studentService.apiStudentUpdateStudentPut$Json({ body: this.editingStudent })
        .subscribe({
          next: (response: Int32ResponseDto) => {
            this.handleResponseMessages(response);
            this.loadStudents(); // Recarga la tabla
            this.editingStudent = undefined; // Limpia el formulario de edición
          },
          error: (error) => {
            this.handleErrorResponse(error, 'Failed to update student.');
          }
        });
    }
  }

  onDelete(id: number): void {
    if (!id) {
      this.errorMessage = 'Invalid student ID.';
      return;
    }

    this.studentService.apiStudentDeleteStudentStudentIdDelete$Json({ studentId: id })
      .subscribe({
        next: (response: Int32ResponseDto) => {
          this.handleResponseMessages(response);
          this.loadStudents(); // Recarga la tabla
        },
        error: (error) => {
          this.handleErrorResponse(error, 'Failed to delete student.');
        }
      });
  }
}
