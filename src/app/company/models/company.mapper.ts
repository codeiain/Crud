import { Injectable } from '@angular/core';
import { Company } from 'src/app/api/company/models';
import { CompanyRequestModel } from './company-request.model';
import { CompanyResponseModel } from './company-response.model';

@Injectable()
export class CompanyMapper {
  constructor() {}

  public mapCompanies(source: any): CompanyResponseModel[]{
    if (!source){
      return [];
    }
    if (!(source instanceof Array)){
      throw new Error('Data for CompanyRequestModel is not any array');
    }
    return source.map((src)=> this.mapResponse(src));
  }

  public mapRequest(data: Company): CompanyRequestModel{
    const model: CompanyRequestModel = new CompanyRequestModel();
    model.companyName = data.companyName;
    model.companyAddress = data.companyAddress;
    model.companyContact = data.companyContact;
    return model;
  }

  public mapResponse(data: Company): CompanyResponseModel {
    const model: CompanyResponseModel = new CompanyResponseModel();
    model.companyId = data.companyId;
    model.companyName = data.companyName;
    model.companyAddress = data.companyAddress;
    model.companyContact = data.companyContact;
    return model;
  }
}
