/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Stats } from '../models/stats';
@Injectable({
  providedIn: 'root',
})
class StatsService extends __BaseService {
  static readonly getApiStatsPath = '/api/Stats';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiStatsResponse(): __Observable<__StrictHttpResponse<Stats>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Stats`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Stats>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiStats(): __Observable<Stats> {
    return this.getApiStatsResponse().pipe(
      __map(_r => _r.body as Stats)
    );
  }
}

module StatsService {
}

export { StatsService }
