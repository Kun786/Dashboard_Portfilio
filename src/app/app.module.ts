import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MainPortal/header/header.component';
import { FooterComponent } from './MainPortal/footer/footer.component';
import { AdminDefaultComponent } from './AdminPortal/admin-default/admin-default.component';
import { AdminSignInComponent } from './ManagementPortal/AdminManagement/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './ManagementPortal/AdminManagement/admin-sign-up/admin-sign-up.component';
import { UserSignUpComponent } from './ManagementPortal/UserManagement/user-sign-up/user-sign-up.component';
import { UserSignInComponent } from './ManagementPortal/UserManagement/user-sign-in/user-sign-in.component';
import { HomeComponent } from './MainPortal/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminDefaultComponent,
    AdminSignInComponent,
    AdminSignUpComponent,
    UserSignUpComponent,
    UserSignInComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
