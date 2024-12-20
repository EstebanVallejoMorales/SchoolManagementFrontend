/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiStudentCreateStudentPost$Json } from '../fn/student/api-student-create-student-post-json';
import { ApiStudentCreateStudentPost$Json$Params } from '../fn/student/api-student-create-student-post-json';
import { apiStudentCreateStudentPost$Plain } from '../fn/student/api-student-create-student-post-plain';
import { ApiStudentCreateStudentPost$Plain$Params } from '../fn/student/api-student-create-student-post-plain';
import { apiStudentDeleteStudentStudentIdDelete$Json } from '../fn/student/api-student-delete-student-student-id-delete-json';
import { ApiStudentDeleteStudentStudentIdDelete$Json$Params } from '../fn/student/api-student-delete-student-student-id-delete-json';
import { apiStudentDeleteStudentStudentIdDelete$Plain } from '../fn/student/api-student-delete-student-student-id-delete-plain';
import { ApiStudentDeleteStudentStudentIdDelete$Plain$Params } from '../fn/student/api-student-delete-student-student-id-delete-plain';
import { apiStudentGetAllStudentsGet$Json } from '../fn/student/api-student-get-all-students-get-json';
import { ApiStudentGetAllStudentsGet$Json$Params } from '../fn/student/api-student-get-all-students-get-json';
import { apiStudentGetAllStudentsGet$Plain } from '../fn/student/api-student-get-all-students-get-plain';
import { ApiStudentGetAllStudentsGet$Plain$Params } from '../fn/student/api-student-get-all-students-get-plain';
import { apiStudentGetAllStudentsStudentIdGet$Json } from '../fn/student/api-student-get-all-students-student-id-get-json';
import { ApiStudentGetAllStudentsStudentIdGet$Json$Params } from '../fn/student/api-student-get-all-students-student-id-get-json';
import { apiStudentGetAllStudentsStudentIdGet$Plain } from '../fn/student/api-student-get-all-students-student-id-get-plain';
import { ApiStudentGetAllStudentsStudentIdGet$Plain$Params } from '../fn/student/api-student-get-all-students-student-id-get-plain';
import { apiStudentUpdateStudentPut$Json } from '../fn/student/api-student-update-student-put-json';
import { ApiStudentUpdateStudentPut$Json$Params } from '../fn/student/api-student-update-student-put-json';
import { apiStudentUpdateStudentPut$Plain } from '../fn/student/api-student-update-student-put-plain';
import { ApiStudentUpdateStudentPut$Plain$Params } from '../fn/student/api-student-update-student-put-plain';
import { Int32ResponseDto } from '../models/int-32-response-dto';
import { StudentViewModelIEnumerableResponseDto } from '../models/student-view-model-i-enumerable-response-dto';
import { StudentViewModelResponseDto } from '../models/student-view-model-response-dto';

@Injectable({ providedIn: 'root' })
export class StudentService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiStudentGetAllStudentsGet()` */
  static readonly ApiStudentGetAllStudentsGetPath = '/api/Student/GetAllStudents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStudentGetAllStudentsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStudentGetAllStudentsGet$Plain$Response(params?: ApiStudentGetAllStudentsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StudentViewModelIEnumerableResponseDto>> {
    return apiStudentGetAllStudentsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStudentGetAllStudentsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStudentGetAllStudentsGet$Plain(params?: ApiStudentGetAllStudentsGet$Plain$Params, context?: HttpContext): Observable<StudentViewModelIEnumerableResponseDto> {
    return this.apiStudentGetAllStudentsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StudentViewModelIEnumerableResponseDto>): StudentViewModelIEnumerableResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStudentGetAllStudentsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStudentGetAllStudentsGet$Json$Response(params?: ApiStudentGetAllStudentsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StudentViewModelIEnumerableResponseDto>> {
    return apiStudentGetAllStudentsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStudentGetAllStudentsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStudentGetAllStudentsGet$Json(params?: ApiStudentGetAllStudentsGet$Json$Params, context?: HttpContext): Observable<StudentViewModelIEnumerableResponseDto> {
    return this.apiStudentGetAllStudentsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StudentViewModelIEnumerableResponseDto>): StudentViewModelIEnumerableResponseDto => r.body)
    );
  }

  /** Path part for operation `apiStudentGetAllStudentsStudentIdGet()` */
  static readonly ApiStudentGetAllStudentsStudentIdGetPath = '/api/Student/GetAllStudents/{studentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStudentGetAllStudentsStudentIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStudentGetAllStudentsStudentIdGet$Plain$Response(params: ApiStudentGetAllStudentsStudentIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StudentViewModelResponseDto>> {
    return apiStudentGetAllStudentsStudentIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStudentGetAllStudentsStudentIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStudentGetAllStudentsStudentIdGet$Plain(params: ApiStudentGetAllStudentsStudentIdGet$Plain$Params, context?: HttpContext): Observable<StudentViewModelResponseDto> {
    return this.apiStudentGetAllStudentsStudentIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StudentViewModelResponseDto>): StudentViewModelResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStudentGetAllStudentsStudentIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStudentGetAllStudentsStudentIdGet$Json$Response(params: ApiStudentGetAllStudentsStudentIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StudentViewModelResponseDto>> {
    return apiStudentGetAllStudentsStudentIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStudentGetAllStudentsStudentIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStudentGetAllStudentsStudentIdGet$Json(params: ApiStudentGetAllStudentsStudentIdGet$Json$Params, context?: HttpContext): Observable<StudentViewModelResponseDto> {
    return this.apiStudentGetAllStudentsStudentIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StudentViewModelResponseDto>): StudentViewModelResponseDto => r.body)
    );
  }

  /** Path part for operation `apiStudentCreateStudentPost()` */
  static readonly ApiStudentCreateStudentPostPath = '/api/Student/CreateStudent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStudentCreateStudentPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStudentCreateStudentPost$Plain$Response(params?: ApiStudentCreateStudentPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResponseDto>> {
    return apiStudentCreateStudentPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStudentCreateStudentPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStudentCreateStudentPost$Plain(params?: ApiStudentCreateStudentPost$Plain$Params, context?: HttpContext): Observable<Int32ResponseDto> {
    return this.apiStudentCreateStudentPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResponseDto>): Int32ResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStudentCreateStudentPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStudentCreateStudentPost$Json$Response(params?: ApiStudentCreateStudentPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResponseDto>> {
    return apiStudentCreateStudentPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStudentCreateStudentPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStudentCreateStudentPost$Json(params?: ApiStudentCreateStudentPost$Json$Params, context?: HttpContext): Observable<Int32ResponseDto> {
    return this.apiStudentCreateStudentPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResponseDto>): Int32ResponseDto => r.body)
    );
  }

  /** Path part for operation `apiStudentUpdateStudentPut()` */
  static readonly ApiStudentUpdateStudentPutPath = '/api/Student/UpdateStudent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStudentUpdateStudentPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStudentUpdateStudentPut$Plain$Response(params?: ApiStudentUpdateStudentPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResponseDto>> {
    return apiStudentUpdateStudentPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStudentUpdateStudentPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStudentUpdateStudentPut$Plain(params?: ApiStudentUpdateStudentPut$Plain$Params, context?: HttpContext): Observable<Int32ResponseDto> {
    return this.apiStudentUpdateStudentPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResponseDto>): Int32ResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStudentUpdateStudentPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStudentUpdateStudentPut$Json$Response(params?: ApiStudentUpdateStudentPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResponseDto>> {
    return apiStudentUpdateStudentPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStudentUpdateStudentPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStudentUpdateStudentPut$Json(params?: ApiStudentUpdateStudentPut$Json$Params, context?: HttpContext): Observable<Int32ResponseDto> {
    return this.apiStudentUpdateStudentPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResponseDto>): Int32ResponseDto => r.body)
    );
  }

  /** Path part for operation `apiStudentDeleteStudentStudentIdDelete()` */
  static readonly ApiStudentDeleteStudentStudentIdDeletePath = '/api/Student/DeleteStudent/{studentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStudentDeleteStudentStudentIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStudentDeleteStudentStudentIdDelete$Plain$Response(params: ApiStudentDeleteStudentStudentIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResponseDto>> {
    return apiStudentDeleteStudentStudentIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStudentDeleteStudentStudentIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStudentDeleteStudentStudentIdDelete$Plain(params: ApiStudentDeleteStudentStudentIdDelete$Plain$Params, context?: HttpContext): Observable<Int32ResponseDto> {
    return this.apiStudentDeleteStudentStudentIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResponseDto>): Int32ResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStudentDeleteStudentStudentIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStudentDeleteStudentStudentIdDelete$Json$Response(params: ApiStudentDeleteStudentStudentIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ResponseDto>> {
    return apiStudentDeleteStudentStudentIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStudentDeleteStudentStudentIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStudentDeleteStudentStudentIdDelete$Json(params: ApiStudentDeleteStudentStudentIdDelete$Json$Params, context?: HttpContext): Observable<Int32ResponseDto> {
    return this.apiStudentDeleteStudentStudentIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ResponseDto>): Int32ResponseDto => r.body)
    );
  }

}
