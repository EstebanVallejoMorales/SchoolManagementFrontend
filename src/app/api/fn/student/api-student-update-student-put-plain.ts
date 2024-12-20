/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Int32ResponseDto } from '../../models/int-32-response-dto';
import { UpdateStudentRequestDto } from '../../models/update-student-request-dto';

export interface ApiStudentUpdateStudentPut$Plain$Params {
      body?: UpdateStudentRequestDto
}

export function apiStudentUpdateStudentPut$Plain(http: HttpClient, rootUrl: string, params?: ApiStudentUpdateStudentPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResponseDto>> {
  const rb = new RequestBuilder(rootUrl, apiStudentUpdateStudentPut$Plain.PATH, 'put');
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

apiStudentUpdateStudentPut$Plain.PATH = '/api/Student/UpdateStudent';