/* tslint:disable */
import { InvoiceLine } from './invoice-line';
export interface Invoice {
  invoiceLines?: null | Array<InvoiceLine>;
  invoicePeriodEnd?: string;
  invoicePeriodStart?: string;
}
