import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpExpComponent } from './components/imp-exp/imp-exp.component';
import { ImpExpBankComponent } from './components/imp-exp-bank/imp-exp-bank.component';
import { CarrierComponent } from './components/carrier/carrier.component';
import { RegulatoryAuthorityComponent } from './components/regulatory-authority/regulatory-authority.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginAppComponent } from './components/login-app/login-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpExpComponent,
    ImpExpBankComponent,
    CarrierComponent,
    RegulatoryAuthorityComponent,
    RegistrationComponent,
    LoginAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
