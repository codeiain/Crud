import { Company, Address, Person } from '../../api/company/models';

export class CompanyResponseModel implements Company  {
  public companyId: string;
  public companyName: string;
  public companyAddress: Address;
  public companyContact: Person;
}
