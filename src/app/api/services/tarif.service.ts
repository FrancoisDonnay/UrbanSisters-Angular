/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Tarif } from '../models/tarif';
import { NewTarif } from '../models/new-tarif';
import { DeleteTarif } from '../models/delete-tarif';
@Injectable({
  providedIn: 'root',
})
class TarifService extends __BaseService {
  static readonly getApiTarifPath = '/api/Tarif';
  static readonly postApiTarifPath = '/api/Tarif';
  static readonly patchApiTarifPath = '/api/Tarif';
  static readonly deleteApiTarifPath = '/api/Tarif';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiTarifResponse(): __Observable<__StrictHttpResponse<Array<Tarif>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Tarif`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Tarif>>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiTarif(): __Observable<Array<Tarif>> {
    return this.getApiTarifResponse().pipe(
      __map(_r => _r.body as Array<Tarif>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiTarifResponse(body?: NewTarif): __Observable<__StrictHttpResponse<Tarif>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Tarif`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tarif>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiTarif(body?: NewTarif): __Observable<Tarif> {
    return this.postApiTarifResponse(body).pipe(
      __map(_r => _r.body as Tarif)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  patchApiTarifResponse(body?: Tarif): __Observable<__StrictHttpResponse<Tarif>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/api/Tarif`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tarif>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  patchApiTarif(body?: Tarif): __Observable<Tarif> {
    return this.patchApiTarifResponse(body).pipe(
      __map(_r => _r.body as Tarif)
    );
  }

  /**
   * @param body undefined
   */
  deleteApiTarifResponse(body?: DeleteTarif): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Tarif`,
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
  deleteApiTarif(body?: DeleteTarif): __Observable<null> {
    return this.deleteApiTarifResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module TarifService {
}

export { TarifService }
