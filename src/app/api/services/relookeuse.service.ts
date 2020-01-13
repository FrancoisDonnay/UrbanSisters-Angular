/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RelookeusePage } from '../models/relookeuse-page';
import { RelookeuseRowVersion } from '../models/relookeuse-row-version';
import { EditRelookeuse } from '../models/edit-relookeuse';
import { NewRelookeuse } from '../models/new-relookeuse';
import { RelookeuseInscription } from '../models/relookeuse-inscription';
import { DetailedRelookeuse } from '../models/detailed-relookeuse';
import { Relookeuse } from '../models/relookeuse';
import { ProfilPicture } from '../models/profil-picture';
@Injectable({
  providedIn: 'root',
})
class RelookeuseService extends __BaseService {
  static readonly getApiRelookeusePath = '/api/Relookeuse';
  static readonly patchApiRelookeusePath = '/api/Relookeuse';
  static readonly postApiRelookeusePath = '/api/Relookeuse';
  static readonly getApiRelookeuseIdPath = '/api/Relookeuse/{id}';
  static readonly getApiRelookeuseMePath = '/api/Relookeuse/me';
  static readonly patchApiRelookeusePicturePath = '/api/Relookeuse/picture';
  static readonly deleteApiRelookeusePicturePath = '/api/Relookeuse/picture';

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
  patchApiRelookeuseResponse(body?: EditRelookeuse): __Observable<__StrictHttpResponse<RelookeuseRowVersion>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PATCH',
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
        return _r as __StrictHttpResponse<RelookeuseRowVersion>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  patchApiRelookeuse(body?: EditRelookeuse): __Observable<RelookeuseRowVersion> {
    return this.patchApiRelookeuseResponse(body).pipe(
      __map(_r => _r.body as RelookeuseRowVersion)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiRelookeuseResponse(body?: RelookeuseInscription): __Observable<__StrictHttpResponse<NewRelookeuse>> {
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
        return _r as __StrictHttpResponse<NewRelookeuse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiRelookeuse(body?: RelookeuseInscription): __Observable<NewRelookeuse> {
    return this.postApiRelookeuseResponse(body).pipe(
      __map(_r => _r.body as NewRelookeuse)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getApiRelookeuseIdResponse(id: number): __Observable<__StrictHttpResponse<DetailedRelookeuse>> {
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
        return _r as __StrictHttpResponse<DetailedRelookeuse>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getApiRelookeuseId(id: number): __Observable<DetailedRelookeuse> {
    return this.getApiRelookeuseIdResponse(id).pipe(
      __map(_r => _r.body as DetailedRelookeuse)
    );
  }

  /**
   * @return Success
   */
  getApiRelookeuseMeResponse(): __Observable<__StrictHttpResponse<Relookeuse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Relookeuse/me`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Relookeuse>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiRelookeuseMe(): __Observable<Relookeuse> {
    return this.getApiRelookeuseMeResponse().pipe(
      __map(_r => _r.body as Relookeuse)
    );
  }

  /**
   * @param params The `RelookeuseService.PatchApiRelookeusePictureParams` containing the following parameters:
   *
   * - `RowVersion`:
   *
   * - `File`:
   *
   * @return Success
   */
  patchApiRelookeusePictureResponse(params: RelookeuseService.PatchApiRelookeusePictureParams): __Observable<__StrictHttpResponse<ProfilPicture>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.RowVersion != null) { __formData.append('RowVersion', params.RowVersion as string | Blob);}
    if (params.File != null) { __formData.append('File', params.File as string | Blob);}
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/Relookeuse/picture`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProfilPicture>;
      })
    );
  }
  /**
   * @param params The `RelookeuseService.PatchApiRelookeusePictureParams` containing the following parameters:
   *
   * - `RowVersion`:
   *
   * - `File`:
   *
   * @return Success
   */
  patchApiRelookeusePicture(params: RelookeuseService.PatchApiRelookeusePictureParams): __Observable<ProfilPicture> {
    return this.patchApiRelookeusePictureResponse(params).pipe(
      __map(_r => _r.body as ProfilPicture)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  deleteApiRelookeusePictureResponse(body?: RelookeuseRowVersion): __Observable<__StrictHttpResponse<RelookeuseRowVersion>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Relookeuse/picture`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RelookeuseRowVersion>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  deleteApiRelookeusePicture(body?: RelookeuseRowVersion): __Observable<RelookeuseRowVersion> {
    return this.deleteApiRelookeusePictureResponse(body).pipe(
      __map(_r => _r.body as RelookeuseRowVersion)
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
   * Parameters for patchApiRelookeusePicture
   */
  export interface PatchApiRelookeusePictureParams {
    RowVersion: string;
    File: string;
  }
}

export { RelookeuseService }
