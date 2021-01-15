import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyService } from '../services/company.service';

import { CompanyAddEditComponent } from './company-add-edit.component';

describe('CompanyAddEditComponent', () => {
  let component: CompanyAddEditComponent;
  let fixture: ComponentFixture<CompanyAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAddEditComponent ],
      providers:[CompanyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
