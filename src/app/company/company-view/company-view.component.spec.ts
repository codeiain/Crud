import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyFormManager } from '../company-add-edit/company-form-manager';
import { CompanyMapper } from '../models/company.mapper';
import { CompanyService } from '../services/company.service';

import { CompanyViewComponent } from './company-view.component';

describe('CompanyViewComponent', () => {
  let component: CompanyViewComponent;
  let fixture: ComponentFixture<CompanyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyViewComponent ],
      providers:[CompanyService, CompanyFormManager, CompanyMapper]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    void expect(component).toBeTruthy();
  });
});
