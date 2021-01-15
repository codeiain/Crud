import { Address, Company, Person } from '../../api/company/models';

export class CompanyRequestModel implements Company {
  public companyId: string;
  public companyName: string;
  public companyAddress: Address;
  public companyContact: Person;
}
