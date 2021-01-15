import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CompanyResponseModel } from '../models/company-response.model';

@Injectable()
export class CompanyFormManager {
  public formInstance: FormGroup;

  constructor(private fb: FormBuilder) {
    this.assignNewFormInstance();
  }

  public setValues(model: CompanyResponseModel): void {
    this.formInstance.get('companyId').setValue(model.companyId);
    this.formInstance.get('name').setValue(model.companyName);
    if (model.companyAddress) {
      this.formInstance
        .get('addressLine1')
        .setValue(model.companyAddress.addressLine1);
      this.formInstance
        .get('addressLine2')
        .setValue(model.companyAddress.addressLine2);
      this.formInstance
        .get('street')
        .setValue(model.companyAddress.addressStreet);
      this.formInstance
        .get('country')
        .setValue(model.companyAddress.addressCountry);
      this.formInstance
        .get('postcode')
        .setValue(model.companyAddress.addressPostCode);
    }
  }

  private assignNewFormInstance(): void {
    const newForm = this.fb.group({
      companyId: this.fb.control(''),
      // disabled linting as this is a static fuction.
      // eslint-disable-next-line @typescript-eslint/unbound-method
      name: this.fb.control('', [Validators.required]),
      addressLine1: this.fb.control(''),
      addressLine2: this.fb.control(''),
      street: this.fb.control(''),
      country: this.fb.control(''),
      postcode: this.fb.control(''),
    });
    this.formInstance = newForm;
  }
}
