import { Component } from '@angular/core';
import { StudentService } from 'src/app/api/services';
import { StudentViewModelResponseDto } from 'src/app/api/models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  studentId?: number; // Almacena el ID ingresado por el usuario
  student?: StudentViewModelResponseDto['data']; // Almacena los datos del estudiante encontrado
  errorMessage: string = ''; // Almacena mensajes de error en caso de que el estudiante no sea encontrado

  constructor(private readonly studentsService: StudentService) {}

  // Método ejecutado al enviar el formulario
  onSearch(): void {
    // Verifica si se ingresó un ID válido
    if (this.studentId) {
      // Llama al servicio para buscar el estudiante por ID
      this.studentsService.apiStudentGetAllStudentsStudentIdGet$Json({ studentId: this.studentId })
        .subscribe({
          next: (response) => {
            this.student = response.data; // Almacena los datos del estudiante
            this.errorMessage = ''; // Limpia el mensaje de error
          },
          error: (error) => {
            this.student = undefined; // Limpia cualquier resultado anterior
            this.errorMessage = 'Student not found.'; // Muestra el mensaje de error
          }
        });
    }
  }
}
