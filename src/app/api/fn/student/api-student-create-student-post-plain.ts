/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateStudentRequestDto } from '../../models/create-student-request-dto';
import { Int32ResponseDto } from '../../models/int-32-response-dto';

export interface ApiStudentCreateStudentPost$Plain$Params {
      body?: CreateStudentRequestDto
}

export function apiStudentCreateStudentPost$Plain(http: HttpClient, rootUrl: string, params?: ApiStudentCreateStudentPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResponseDto>> {
  const rb = new RequestBuilder(rootUrl, apiStudentCreateStudentPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Int32ResponseDto>;
    })
  );
}

apiStudentCreateStudentPost$Plain.PATH = '/api/Student/CreateStudent';
