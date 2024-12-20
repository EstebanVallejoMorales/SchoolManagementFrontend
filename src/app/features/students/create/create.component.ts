import { Component } from '@angular/core';
import { StudentService } from 'src/app/api/services';
import { CreateStudentRequestDto, Int32ResponseDto, ErrorDto } from 'src/app/api/models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  student: CreateStudentRequestDto = {
    name: '',
    lastName: '',
    genderId: 0
  }; // Inicializa el modelo del formulario

  successMessage: string = ''; // Mensaje de éxito
  errorMessage: string = ''; // Mensaje general de error
  detailedErrors: string[] = []; // Lista de errores específicos como cadenas

  constructor(private readonly studentService: StudentService) {}

  onSave(): void {
    this.studentService.apiStudentCreateStudentPost$Json({ body: this.student })
      .subscribe({
        next: (response: Int32ResponseDto) => {
          this.successMessage = response.message || '';
          this.errorMessage = '';
          this.detailedErrors = this.detailedErrors = response.errors
            ?.map((err: ErrorDto) => err.message)
            .filter((msg): msg is string => !!msg) || []; // Filtra solo cadenas no nulas;
          this.student = { name: '', lastName: '', genderId: 0 }; // Limpia el formulario
        },
        error: (error) => {
          if (error.error) {
            const responseError = error.error as Int32ResponseDto;
            this.errorMessage = responseError.message || 'Failed to create student.';
            this.detailedErrors = responseError.errors
              ?.map((err: ErrorDto) => err.message)
              .filter((msg): msg is string => !!msg) || []; // Filtra solo cadenas no nulas
          } else {
            this.errorMessage = 'Failed to create student. Please try again.';
            this.detailedErrors = [];
          }
          this.successMessage = '';
        }
      });
  }
}
