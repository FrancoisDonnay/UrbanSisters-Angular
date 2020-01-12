/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Availability } from '../models/availability';
import { NewAvailability } from '../models/new-availability';
import { DeleteAvailability } from '../models/delete-availability';
@Injectable({
  providedIn: 'root',
})
class AvailabilityService extends __BaseService {
  static readonly getApiAvailabilityPath = '/api/Availability';
  static readonly postApiAvailabilityPath = '/api/Availability';
  static readonly patchApiAvailabilityPath = '/api/Availability';
  static readonly deleteApiAvailabilityPath = '/api/Availability';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiAvailabilityResponse(): __Observable<__StrictHttpResponse<Array<Availability>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Availability`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Availability>>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiAvailability(): __Observable<Array<Availability>> {
    return this.getApiAvailabilityResponse().pipe(
      __map(_r => _r.body as Array<Availability>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiAvailabilityResponse(body?: NewAvailability): __Observable<__StrictHttpResponse<Availability>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Availability`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Availability>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiAvailability(body?: NewAvailability): __Observable<Availability> {
    return this.postApiAvailabilityResponse(body).pipe(
      __map(_r => _r.body as Availability)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  patchApiAvailabilityResponse(body?: Availability): __Observable<__StrictHttpResponse<Availability>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/Availability`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Availability>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  patchApiAvailability(body?: Availability): __Observable<Availability> {
    return this.patchApiAvailabilityResponse(body).pipe(
      __map(_r => _r.body as Availability)
    );
  }

  /**
   * @param body undefined
   */
  deleteApiAvailabilityResponse(body?: DeleteAvailability): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Availability`,
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
  deleteApiAvailability(body?: DeleteAvailability): __Observable<null> {
    return this.deleteApiAvailabilityResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AvailabilityService {
}

export { AvailabilityService }
