/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RelookeusePage } from '../models/relookeuse-page';
import { JwtToken } from '../models/jwt-token';
import { RelookeuseInscription } from '../models/relookeuse-inscription';
@Injectable({
  providedIn: 'root',
})
class RelookeuseService extends __BaseService {
  static readonly getApiRelookeusePath = '/api/Relookeuse';
  static readonly postApiRelookeusePath = '/api/Relookeuse';
  static readonly getApiRelookeuseIdPath = '/api/Relookeuse/{id}';
  static readonly postApiRelookeusePictureIdPath = '/api/Relookeuse/picture/{id}';
  static readonly patchApiRelookeusePictureIdPath = '/api/Relookeuse/picture/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `RelookeuseService.GetApiRelookeuseParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getApiRelookeuseResponse(params: RelookeuseService.GetApiRelookeuseParams): __Observable<__StrictHttpResponse<RelookeusePage>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageIndex != null) __params = __params.set('pageIndex', params.pageIndex.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Relookeuse`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RelookeusePage>;
      })
    );
  }
  /**
   * @param params The `RelookeuseService.GetApiRelookeuseParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `pageIndex`:
   *
   * @return Success
   */
  getApiRelookeuse(params: RelookeuseService.GetApiRelookeuseParams): __Observable<RelookeusePage> {
    return this.getApiRelookeuseResponse(params).pipe(
      __map(_r => _r.body as RelookeusePage)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiRelookeuseResponse(body?: RelookeuseInscription): __Observable<__StrictHttpResponse<JwtToken>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Relookeuse`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<JwtToken>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiRelookeuse(body?: RelookeuseInscription): __Observable<JwtToken> {
    return this.postApiRelookeuseResponse(body).pipe(
      __map(_r => _r.body as JwtToken)
    );
  }

  /**
   * @param id undefined
   */
  getApiRelookeuseIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Relookeuse/${id}`,
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
   * @param id undefined
   */
  getApiRelookeuseId(id: number): __Observable<null> {
    return this.getApiRelookeuseIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `RelookeuseService.PostApiRelookeusePictureIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `File`:
   */
  postApiRelookeusePictureIdResponse(params: RelookeuseService.PostApiRelookeusePictureIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.File != null) { __formData.append('File', params.File as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Relookeuse/picture/${params.id}`,
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
   * @param params The `RelookeuseService.PostApiRelookeusePictureIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `File`:
   */
  postApiRelookeusePictureId(params: RelookeuseService.PostApiRelookeusePictureIdParams): __Observable<null> {
    return this.postApiRelookeusePictureIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `RelookeuseService.PatchApiRelookeusePictureIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `File`:
   */
  patchApiRelookeusePictureIdResponse(params: RelookeuseService.PatchApiRelookeusePictureIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.File != null) { __formData.append('File', params.File as string | Blob);}
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/Relookeuse/picture/${params.id}`,
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
   * @param params The `RelookeuseService.PatchApiRelookeusePictureIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `File`:
   */
  patchApiRelookeusePictureId(params: RelookeuseService.PatchApiRelookeusePictureIdParams): __Observable<null> {
    return this.patchApiRelookeusePictureIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module RelookeuseService {

  /**
   * Parameters for getApiRelookeuse
   */
  export interface GetApiRelookeuseParams {
    pageSize?: number;
    pageIndex?: number;
  }

  /**
   * Parameters for postApiRelookeusePictureId
   */
  export interface PostApiRelookeusePictureIdParams {
    id: number;
    File: string;
  }

  /**
   * Parameters for patchApiRelookeusePictureId
   */
  export interface PatchApiRelookeusePictureIdParams {
    id: number;
    File: string;
  }
}

export { RelookeuseService }
