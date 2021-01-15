import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyAddEditComponent } from './company/company-add-edit/company-add-edit.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyViewComponent } from './company/company-view/company-view.component';
import { CompanyListResolverService } from './company/services/compant-list-resolver.service';
import { CompanyResolverService } from './company/services/company-relover.service';

const routes: Routes = [
  {
    path: 'companies',
    component: CompanyListComponent,
    resolve: {
      companies: CompanyListResolverService,
    },
  },
  {
    path: 'company-add',
    component: CompanyAddEditComponent,
    resolve: {
      company: CompanyResolverService,
    },
  },
  {
    path: 'company-edit/:id',
    component: CompanyAddEditComponent,
    resolve: {
      company: CompanyResolverService,
    },
  },
  {
    path: 'company-view/:id',
    component: CompanyViewComponent,
    resolve: {
      company: CompanyResolverService,
    },
  },
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
