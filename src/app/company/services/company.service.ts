import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompanyResponseModel } from '../models/company-response.model';
import { CompanyMapper } from '../models/company.mapper';
import { CompaniesService } from '../../api/company/services/companies.service';
import { CompanyRequestModel } from '../models/company-request.model';

@Injectable()
export class CompanyService {
  constructor(
    private mapper: CompanyMapper,
    private apiService: CompaniesService
  ) {}

  public getCompanies(): Observable<CompanyResponseModel[]> {
    return this.apiService.apiCompaniesGet$Json().pipe(
      map((r) => this.mapper.mapCompanies(r))
    );
  }

  public getCompanyById(id: string): Observable<CompanyResponseModel> {
    return this.apiService
      .apiCompaniesCompanyIdGet$Json({ companyId: id })
      .pipe(
        map((r) => this.mapper.mapResponse(r))
      );
  }
  public addCompany(
    company: CompanyRequestModel
  ): Observable<CompanyResponseModel> {
    return this.apiService
      .apiCompaniesPost$Json({ body: company })
      .pipe(
        map((r) => this.mapper.mapResponse(r))
      );
  }

  public updateCompany(companyId: string, company: CompanyRequestModel): Observable<CompanyResponseModel> {
    return this.apiService
      .apiCompaniesCompanyIdPut$Json({ companyId: companyId, body: company })
      .pipe(
        map((r) => this.mapper.mapResponse(r))
      );
  }
}
