/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { Company } from '../models/company';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCompaniesGet
   */
  static readonly ApiCompaniesGetPath = '/api/Companies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompaniesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Company>>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ApiCompaniesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r as StrictHttpResponse<Array<Company>>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCompaniesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesGet$Plain(params?: {

  }): Observable<Array<Company>> {

    return this.apiCompaniesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Company>>) => r.body )
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompaniesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Company>>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ApiCompaniesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r as StrictHttpResponse<Array<Company>>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCompaniesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesGet$Json(params?: {

  }): Observable<Array<Company>> {

    return this.apiCompaniesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Company>>) => r.body )
    );
  }

  /**
   * Path part for operation apiCompaniesPost
   */
  static readonly ApiCompaniesPostPath = '/api/Companies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompaniesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompaniesPost$Plain$Response(params?: {
      body?: Company;
  }): Observable<StrictHttpResponse<Company>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ApiCompaniesPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r as StrictHttpResponse<Company>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCompaniesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompaniesPost$Plain(params?: {
      body?: Company;
  }): Observable<Company> {

    return this.apiCompaniesPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Company>) => r.body )
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompaniesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompaniesPost$Json$Response(params?: {
      body?: Company;
  }): Observable<StrictHttpResponse<Company>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ApiCompaniesPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r as StrictHttpResponse<Company>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCompaniesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompaniesPost$Json(params?: {
      body?: Company;
  }): Observable<Company> {

    return this.apiCompaniesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Company>) => r.body )
    );
  }

  /**
   * Path part for operation apiCompaniesCompanyIdGet
   */
  static readonly ApiCompaniesCompanyIdGetPath = '/api/Companies/{companyId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompaniesCompanyIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesCompanyIdGet$Plain$Response(params: {
    companyId: null | string;

  }): Observable<StrictHttpResponse<Company>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ApiCompaniesCompanyIdGetPath, 'get');
    if (params) {

      rb.path('companyId', params.companyId, {'style':'simple'});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r as StrictHttpResponse<Company>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCompaniesCompanyIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesCompanyIdGet$Plain(params: {
    companyId: null | string;

  }): Observable<Company> {

    return this.apiCompaniesCompanyIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Company>) => r.body )
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompaniesCompanyIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesCompanyIdGet$Json$Response(params: {
    companyId: null | string;

  }): Observable<StrictHttpResponse<Company>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ApiCompaniesCompanyIdGetPath, 'get');
    if (params) {

      rb.path('companyId', params.companyId, {'style':'simple'});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r as StrictHttpResponse<Company>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCompaniesCompanyIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesCompanyIdGet$Json(params: {
    companyId: null | string;

  }): Observable<Company> {

    return this.apiCompaniesCompanyIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Company>) => r.body )
    );
  }

  /**
   * Path part for operation apiCompaniesCompanyIdPut
   */
  static readonly ApiCompaniesCompanyIdPutPath = '/api/Companies/{companyId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompaniesCompanyIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompaniesCompanyIdPut$Plain$Response(params: {
    companyId: null | string;
      body?: Company;
  }): Observable<StrictHttpResponse<Company>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ApiCompaniesCompanyIdPutPath, 'put');
    if (params) {

      rb.path('companyId', params.companyId, {'style':'simple'});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r as StrictHttpResponse<Company>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCompaniesCompanyIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompaniesCompanyIdPut$Plain(params: {
    companyId: null | string;
      body?: Company;
  }): Observable<Company> {

    return this.apiCompaniesCompanyIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Company>) => r.body )
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompaniesCompanyIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompaniesCompanyIdPut$Json$Response(params: {
    companyId: null | string;
      body?: Company;
  }): Observable<StrictHttpResponse<Company>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ApiCompaniesCompanyIdPutPath, 'put');
    if (params) {

      rb.path('companyId', params.companyId, {'style':'simple'});

      rb.body(params.body, 'application/*+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => r as StrictHttpResponse<Company>)
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCompaniesCompanyIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCompaniesCompanyIdPut$Json(params: {
    companyId: null | string;
      body?: Company;
  }): Observable<Company> {

    return this.apiCompaniesCompanyIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Company>) => r.body )
    );
  }

  /**
   * Path part for operation apiCompaniesCompanyIdDelete
   */
  static readonly ApiCompaniesCompanyIdDeletePath = '/api/Companies/{companyId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompaniesCompanyIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesCompanyIdDelete$Plain$Response(params: {
    companyId: null | string;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ApiCompaniesCompanyIdDeletePath, 'delete');
    if (params) {

      rb.path('companyId', params.companyId, {'style':'simple'});

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
   * To access the full response (for headers, for example), `apiCompaniesCompanyIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesCompanyIdDelete$Plain(params: {
    companyId: null | string;

  }): Observable<boolean> {

    return this.apiCompaniesCompanyIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body )
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompaniesCompanyIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesCompanyIdDelete$Json$Response(params: {
    companyId: null | string;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ApiCompaniesCompanyIdDeletePath, 'delete');
    if (params) {

      rb.path('companyId', params.companyId, {'style':'simple'});

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
   * To access the full response (for headers, for example), `apiCompaniesCompanyIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesCompanyIdDelete$Json(params: {
    companyId: null | string;

  }): Observable<boolean> {

    return this.apiCompaniesCompanyIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body )
    );
  }

  /**
   * Path part for operation apiCompaniesCompanyIdAddressGet
   */
  static readonly ApiCompaniesCompanyIdAddressGetPath = '/api/Companies/{companyId}/Address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompaniesCompanyIdAddressGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesCompanyIdAddressGet$Response(params: {
    companyId: null | string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ApiCompaniesCompanyIdAddressGetPath, 'get');
    if (params) {

      rb.path('companyId', params.companyId, {'style':'simple'});

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
   * To access the full response (for headers, for example), `apiCompaniesCompanyIdAddressGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesCompanyIdAddressGet(params: {
    companyId: null | string;

  }): Observable<void> {

    return this.apiCompaniesCompanyIdAddressGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body )
    );
  }

  /**
   * Path part for operation apiCompaniesCompanyIdContactGet
   */
  static readonly ApiCompaniesCompanyIdContactGetPath = '/api/Companies/{companyId}/Contact';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCompaniesCompanyIdContactGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesCompanyIdContactGet$Response(params: {
    companyId: null | string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ApiCompaniesCompanyIdContactGetPath, 'get');
    if (params) {

      rb.path('companyId', params.companyId, {'style':'simple'});

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
   * To access the full response (for headers, for example), `apiCompaniesCompanyIdContactGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCompaniesCompanyIdContactGet(params: {
    companyId: null | string;

  }): Observable<void> {

    return this.apiCompaniesCompanyIdContactGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body )
    );
  }

}
