/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
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
   * @return Success
   */
  getApiUserResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
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
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiUser(): __Observable<Array<User>> {
    return this.getApiUserResponse().pipe(
      __map(_r => _r.body as Array<User>)
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
}

export { UserService }
