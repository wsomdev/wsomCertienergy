import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerModule } from './components/customer/customer.module';
import { CommonComposantModule } from './components/common/commonComposant.module';
// import for currency and date pipe
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonComposantModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
