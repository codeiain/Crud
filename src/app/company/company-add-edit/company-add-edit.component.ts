import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { findParamAnywhereInRoute } from 'src/app/helpers/angular-routing.helper';
import { CompanyRequestModel } from '../models/company-request.model';
import { CompanyResponseModel } from '../models/company-response.model';
import { CompanyService } from '../services/company.service';
import { CompanyFormManager } from './company-form-manager';

@Component({
  selector: 'app-company-add-edit',
  templateUrl: './company-add-edit.component.html',
  styleUrls: ['./company-add-edit.component.scss'],
})
export class CompanyAddEditComponent implements OnInit {
  public companyResult: CompanyResponseModel | null;
  private destroyed$ = new Subject<boolean>();
  /**
   *
   * @param formManager
   * @param route
   * @param companyService
   */
  constructor(
    private formManager: CompanyFormManager,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService
  ) {
    this.companyResult = new CompanyResponseModel();
  }

  public get form(): FormGroup {
    return this.formManager.formInstance;
  }

  public ngOnInit(): void {
    this.activatedRoute.data
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.companyResult = data.company as CompanyResponseModel;
        this.formManager.setValues(this.companyResult);
      });
  }

  public save(): void {
    if (this.form.valid) {
      const formValues = this.form.value as CompanyRequestModel;
      if (formValues.companyId === null) {
        this.companyService.addCompany(formValues).subscribe((data) => {
          this.companyResult = data;
        });
      } else {
        this.companyService
          .updateCompany(formValues.companyId, formValues)
          .subscribe((data) => {
            this.companyResult = data;
          });
      }
    }
  }
}
