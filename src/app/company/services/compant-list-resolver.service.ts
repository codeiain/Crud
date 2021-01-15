import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CompanyResponseModel } from '../models/company-response.model';
import { CompanyService } from './company.service';

@Injectable()
export class CompanyListResolverService
  implements Resolve<CompanyResponseModel[]> {
  constructor(private service: CompanyService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CompanyResponseModel[]> {
    return this.service.getCompanies().pipe(
      retry(3)
    );
  }
}
