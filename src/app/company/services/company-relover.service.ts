import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, retry, take } from 'rxjs/operators';
import { findParamAnywhereInRoute } from 'src/app/helpers/angular-routing.helper';
import { CompanyResponseModel } from '../models/company-response.model';
import { CompanyService } from './company.service';

@Injectable()
export class CompanyResolverService implements Resolve<CompanyResponseModel> {
  constructor(private service: CompanyService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CompanyResponseModel> {
    const companyId = findParamAnywhereInRoute(route, 'id');
    if (!companyId){
      return new Observable((observer) => {
        observer.next(new CompanyResponseModel());
        observer.complete();
      });
    }
    return this.service.getCompanyById(companyId).pipe(
      retry(3),
      take(1),
      map((model) => {
        if (!model) {
          throw new Error(`Can't find the company with the id of ${companyId}`);
        }
        return model;
      })
    );
  }
}
