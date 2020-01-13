/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AppointmentPage } from '../models/appointment-page';
import { AppointmentRequest } from '../models/appointment-request';
import { AppointmentProPage } from '../models/appointment-pro-page';
import { Rating } from '../models/rating';
import { AppointmentRowVersion } from '../models/appointment-row-version';
import { AppointmentStatusChange } from '../models/appointment-status-change';
@Injectable({
  providedIn: 'root',
})
class AppointmentService extends __BaseService {
  static readonly getApiAppointmentPath = '/api/Appointment';
  static readonly postApiAppointmentPath = '/api/Appointment';
  static readonly getApiAppointmentProPath = '/api/Appointment/pro';
  static readonly patchApiAppointmentIdClosePath = '/api/Appointment/{id}/close';
  static readonly patchApiAppointmentIdPath = '/api/Appointment/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `AppointmentService.GetApiAppointmentParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getApiAppointmentResponse(params: AppointmentService.GetApiAppointmentParams): __Observable<__StrictHttpResponse<AppointmentPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageIndex != null) __params = __params.set('pageIndex', params.pageIndex.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Appointment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AppointmentPage>;
      })
    );
  }
  /**
   * @param params The `AppointmentService.GetApiAppointmentParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getApiAppointment(params: AppointmentService.GetApiAppointmentParams): __Observable<AppointmentPage> {
    return this.getApiAppointmentResponse(params).pipe(
      __map(_r => _r.body as AppointmentPage)
    );
  }

  /**
   * @param body undefined
   */
  postApiAppointmentResponse(body?: AppointmentRequest): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Appointment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  postApiAppointment(body?: AppointmentRequest): __Observable<null> {
    return this.postApiAppointmentResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `AppointmentService.GetApiAppointmentProParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getApiAppointmentProResponse(params: AppointmentService.GetApiAppointmentProParams): __Observable<__StrictHttpResponse<AppointmentProPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageIndex != null) __params = __params.set('pageIndex', params.pageIndex.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Appointment/pro`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AppointmentProPage>;
      })
    );
  }
  /**
   * @param params The `AppointmentService.GetApiAppointmentProParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getApiAppointmentPro(params: AppointmentService.GetApiAppointmentProParams): __Observable<AppointmentProPage> {
    return this.getApiAppointmentProResponse(params).pipe(
      __map(_r => _r.body as AppointmentProPage)
    );
  }

  /**
   * @param params The `AppointmentService.PatchApiAppointmentIdCloseParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  patchApiAppointmentIdCloseResponse(params: AppointmentService.PatchApiAppointmentIdCloseParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/Appointment/${params.id}/close`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `AppointmentService.PatchApiAppointmentIdCloseParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  patchApiAppointmentIdClose(params: AppointmentService.PatchApiAppointmentIdCloseParams): __Observable<null> {
    return this.patchApiAppointmentIdCloseResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `AppointmentService.PatchApiAppointmentIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return Success
   */
  patchApiAppointmentIdResponse(params: AppointmentService.PatchApiAppointmentIdParams): __Observable<__StrictHttpResponse<AppointmentRowVersion>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/Appointment/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AppointmentRowVersion>;
      })
    );
  }
  /**
   * @param params The `AppointmentService.PatchApiAppointmentIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return Success
   */
  patchApiAppointmentId(params: AppointmentService.PatchApiAppointmentIdParams): __Observable<AppointmentRowVersion> {
    return this.patchApiAppointmentIdResponse(params).pipe(
      __map(_r => _r.body as AppointmentRowVersion)
    );
  }
}

module AppointmentService {

  /**
   * Parameters for getApiAppointment
   */
  export interface GetApiAppointmentParams {
    pageSize?: number;
    pageIndex?: number;
  }

  /**
   * Parameters for getApiAppointmentPro
   */
  export interface GetApiAppointmentProParams {
    pageSize?: number;
    pageIndex?: number;
  }

  /**
   * Parameters for patchApiAppointmentIdClose
   */
  export interface PatchApiAppointmentIdCloseParams {
    id: number;
    body?: Rating;
  }

  /**
   * Parameters for patchApiAppointmentId
   */
  export interface PatchApiAppointmentIdParams {
    id: number;
    body?: AppointmentStatusChange;
  }
}

export { AppointmentService }
