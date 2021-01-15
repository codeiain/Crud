import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CompanyResponseModel } from '../models/company-response.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit, OnDestroy {
  companyList: CompanyResponseModel[];

  private destroyed$ = new Subject<boolean>();

  constructor(private activatedRoute: ActivatedRoute) {
    this.companyList = new Array<CompanyResponseModel>();
  }

  public ngOnInit(): void {
    this.activatedRoute.data
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.companyList = data.companies as CompanyResponseModel[];
      });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
