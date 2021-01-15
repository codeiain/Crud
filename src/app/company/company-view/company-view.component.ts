import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CompanyResponseModel } from '../models/company-response.model';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss'],
})
export class CompanyViewComponent implements OnInit, OnDestroy {
  public company: CompanyResponseModel;
  private destroyed$ = new Subject<boolean>();

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.company = new CompanyResponseModel();
  }

  public ngOnInit(): void {
    this.activatedRoute.data
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.company = data.company as CompanyResponseModel;
      });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
