/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StudentViewModelResponseDto } from '../../models/student-view-model-response-dto';

export interface ApiStudentGetAllStudentsStudentIdGet$Json$Params {
  studentId: number;
}

export function apiStudentGetAllStudentsStudentIdGet$Json(http: HttpClient, rootUrl: string, params: ApiStudentGetAllStudentsStudentIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StudentViewModelResponseDto>> {
  const rb = new RequestBuilder(rootUrl, apiStudentGetAllStudentsStudentIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('studentId', params.studentId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StudentViewModelResponseDto>;
    })
  );
}

apiStudentGetAllStudentsStudentIdGet$Json.PATH = '/api/Student/GetAllStudents/{studentId}';