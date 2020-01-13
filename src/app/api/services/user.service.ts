/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
import { UserPage } from '../models/user-page';
import { UserChange } from '../models/user-change';
@Injectable({
  providedIn: 'root',
})
class UserService extends __BaseService {
  static readonly getApiUserMePath = '/api/User/me';
  static readonly getApiUserPath = '/api/User';
  static readonly patchApiUserPath = '/api/User';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiUserMeResponse(): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/User/me`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiUserMe(): __Observable<User> {
    return this.getApiUserMeResponse().pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * @param params The `UserService.GetApiUserParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getApiUserResponse(params: UserService.GetApiUserParams): __Observable<__StrictHttpResponse<UserPage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageIndex != null) __params = __params.set('pageIndex', params.pageIndex.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/User`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserPage>;
      })
    );
  }
  /**
   * @param params The `UserService.GetApiUserParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getApiUser(params: UserService.GetApiUserParams): __Observable<UserPage> {
    return this.getApiUserResponse(params).pipe(
      __map(_r => _r.body as UserPage)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  patchApiUserResponse(body?: UserChange): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/User`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  patchApiUser(body?: UserChange): __Observable<User> {
    return this.patchApiUserResponse(body).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module UserService {

  /**
   * Parameters for getApiUser
   */
  export interface GetApiUserParams {
    pageSize?: number;
    pageIndex?: number;
  }
}

export { UserService }
