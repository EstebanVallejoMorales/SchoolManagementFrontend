import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/api/services';
import { StudentIEnumerableResponseDto } from 'src/app/api/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  students: StudentIEnumerableResponseDto['data'] = [];

  constructor(private readonly studentsService: StudentService) {}

  ngOnInit() {
    this.studentsService.apiStudentGetAllStudentsGet$Json().subscribe((response) => {
      this.students = response.data || []; // Manejar el caso de null
    });
  }
}
