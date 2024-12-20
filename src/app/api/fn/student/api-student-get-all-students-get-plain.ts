/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StudentViewModelIEnumerableResponseDto } from '../../models/student-view-model-i-enumerable-response-dto';

export interface ApiStudentGetAllStudentsGet$Plain$Params {
}

export function apiStudentGetAllStudentsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiStudentGetAllStudentsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StudentViewModelIEnumerableResponseDto>> {
  const rb = new RequestBuilder(rootUrl, apiStudentGetAllStudentsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StudentViewModelIEnumerableResponseDto>;
    })
  );
}

apiStudentGetAllStudentsGet$Plain.PATH = '/api/Student/GetAllStudents';
