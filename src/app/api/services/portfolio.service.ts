/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PortfolioPicture } from '../models/portfolio-picture';
@Injectable({
  providedIn: 'root',
})
class PortfolioService extends __BaseService {
  static readonly getApiPortfolioPath = '/api/Portfolio';
  static readonly postApiPortfolioPath = '/api/Portfolio';
  static readonly deleteApiPortfolioIdPath = '/api/Portfolio/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiPortfolioResponse(): __Observable<__StrictHttpResponse<Array<PortfolioPicture>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Portfolio`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PortfolioPicture>>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiPortfolio(): __Observable<Array<PortfolioPicture>> {
    return this.getApiPortfolioResponse().pipe(
      __map(_r => _r.body as Array<PortfolioPicture>)
    );
  }

  /**
   * @param File undefined
   * @return Success
   */
  postApiPortfolioResponse(File: string): __Observable<__StrictHttpResponse<PortfolioPicture>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (File != null) { __formData.append('File', File as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Portfolio`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PortfolioPicture>;
      })
    );
  }
  /**
   * @param File undefined
   * @return Success
   */
  postApiPortfolio(File: string): __Observable<PortfolioPicture> {
    return this.postApiPortfolioResponse(File).pipe(
      __map(_r => _r.body as PortfolioPicture)
    );
  }

  /**
   * @param id undefined
   */
  deleteApiPortfolioIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Portfolio/${id}`,
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
  deleteApiPortfolioId(id: number): __Observable<null> {
    return this.deleteApiPortfolioIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PortfolioService {
}

export { PortfolioService }
