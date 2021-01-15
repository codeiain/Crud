/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoicesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiInvoicesInvoiceIdGet
   */
  static readonly ApiInvoicesInvoiceIdGetPath = '/api/Invoices/{invoiceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesInvoiceIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesInvoiceIdGet$Response(params: {
    invoiceId: null | string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesInvoiceIdGetPath, 'get');
    if (params) {

      rb.path('invoiceId', params.invoiceId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => (r ).clone({ body: undefined }) as StrictHttpResponse<void>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesInvoiceIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesInvoiceIdGet(params: {
    invoiceId: null | string;

  }): Observable<void> {

    return this.apiInvoicesInvoiceIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body )
    );
  }

  /**
   * Path part for operation apiInvoicesInvoiceIdPost
   */
  static readonly ApiInvoicesInvoiceIdPostPath = '/api/Invoices/{invoiceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesInvoiceIdPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoicesInvoiceIdPost$Plain$Response(params: {
    invoiceId: null | string;
      body?: Invoice;
  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesInvoiceIdPostPath, 'post');
    if (params) {

      rb.path('invoiceId', params.invoiceId, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r as StrictHttpResponse<Invoice>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesInvoiceIdPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoicesInvoiceIdPost$Plain(params: {
    invoiceId: null | string;
      body?: Invoice;
  }): Observable<Invoice> {

    return this.apiInvoicesInvoiceIdPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body )
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesInvoiceIdPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoicesInvoiceIdPost$Json$Response(params: {
    invoiceId: null | string;
      body?: Invoice;
  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesInvoiceIdPostPath, 'post');
    if (params) {

      rb.path('invoiceId', params.invoiceId, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r as StrictHttpResponse<Invoice>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesInvoiceIdPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoicesInvoiceIdPost$Json(params: {
    invoiceId: null | string;
      body?: Invoice;
  }): Observable<Invoice> {

    return this.apiInvoicesInvoiceIdPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body )
    );
  }

  /**
   * Path part for operation apiInvoicesInvoiceIdDelete
   */
  static readonly ApiInvoicesInvoiceIdDeletePath = '/api/Invoices/{invoiceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesInvoiceIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesInvoiceIdDelete$Plain$Response(params: {
    invoiceId: null | string;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesInvoiceIdDeletePath, 'delete');
    if (params) {

      rb.path('invoiceId', params.invoiceId, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => (r ).clone({ body: String((r ).body) === 'true' }) as StrictHttpResponse<boolean>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesInvoiceIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesInvoiceIdDelete$Plain(params: {
    invoiceId: null | string;

  }): Observable<boolean> {

    return this.apiInvoicesInvoiceIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body )
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesInvoiceIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesInvoiceIdDelete$Json$Response(params: {
    invoiceId: null | string;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesInvoiceIdDeletePath, 'delete');
    if (params) {

      rb.path('invoiceId', params.invoiceId, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => (r ).clone({ body: String((r ).body) === 'true' }) as StrictHttpResponse<boolean>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesInvoiceIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInvoicesInvoiceIdDelete$Json(params: {
    invoiceId: null | string;

  }): Observable<boolean> {

    return this.apiInvoicesInvoiceIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body )
    );
  }

  /**
   * Path part for operation apiInvoicesCompanyIdPut
   */
  static readonly ApiInvoicesCompanyIdPutPath = '/api/Invoices/{companyId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesCompanyIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoicesCompanyIdPut$Plain$Response(params: {
    invoiceId?: null | string;
    companyId: string;
      body?: Invoice;
  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesCompanyIdPutPath, 'put');
    if (params) {

      rb.query('invoiceId', params.invoiceId, {});
      rb.path('companyId', params.companyId, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r as StrictHttpResponse<Invoice>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesCompanyIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoicesCompanyIdPut$Plain(params: {
    invoiceId?: null | string;
    companyId: string;
      body?: Invoice;
  }): Observable<Invoice> {

    return this.apiInvoicesCompanyIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body )
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInvoicesCompanyIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoicesCompanyIdPut$Json$Response(params: {
    invoiceId?: null | string;
    companyId: string;
      body?: Invoice;
  }): Observable<StrictHttpResponse<Invoice>> {

    const rb = new RequestBuilder(this.rootUrl, InvoicesService.ApiInvoicesCompanyIdPutPath, 'put');
    if (params) {

      rb.query('invoiceId', params.invoiceId, {});
      rb.path('companyId', params.companyId, {});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r as StrictHttpResponse<Invoice>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiInvoicesCompanyIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInvoicesCompanyIdPut$Json(params: {
    invoiceId?: null | string;
    companyId: string;
      body?: Invoice;
  }): Observable<Invoice> {

    return this.apiInvoicesCompanyIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Invoice>) => r.body )
    );
  }

}
