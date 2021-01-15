import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from './services/company.service';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyMapper } from './models/company.mapper';
import { CompanyViewComponent } from './company-view/company-view.component';
import { CompanyAddEditComponent } from './company-add-edit/company-add-edit.component';
import { CompanyFormManager } from './company-add-edit/company-form-manager';
import { CompanyListResolverService } from './services/compant-list-resolver.service';
import { CompanyResolverService } from './services/company-relover.service';

@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyViewComponent,
    CompanyAddEditComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  providers: [
    CompanyService,
    CompanyMapper,
    CompanyFormManager,
    CompanyListResolverService,
    CompanyResolverService,
  ],
})
export class CompanyModule {}
