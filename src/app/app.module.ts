import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApiModule as CompanyApiModule } from './api/company/api.module';
import { ApiModule as InvoiceApiModule } from './api/invoice/api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule,
    HttpClientModule,
    CompanyApiModule.forRoot({rootUrl: 'http://l7qqd.mocklab.io'}),
    InvoiceApiModule.forRoot({rootUrl: 'https://localhost:5001/'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
