import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { BillingComponent } from '../billing/billing.component';
import { ProfileComponent } from '../profile/profile.component';
import { RTLComponent } from '../rtl/rtl.component';
import { TablesComponent } from '../tables/tables.component';
import { VirtualRealityComponent } from '../virtual-reality/virtual-reality.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    AdminDashboardComponent,
    TablesComponent,
    BillingComponent,
    VirtualRealityComponent,
    RTLComponent,
    ProfileComponent,
  ]
})
export class AdminDefaultModule { }
