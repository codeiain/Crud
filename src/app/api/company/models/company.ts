/* tslint:disable */
import { Address } from './address';
import { Person } from './person';
export interface Company {
  companyAddress?: Address;
  companyContact?: Person;
  companyId?: string;
  companyName?: null | string;
}
