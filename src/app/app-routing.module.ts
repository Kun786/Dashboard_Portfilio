import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './AdminPortal/admin-dashboard/admin-dashboard.component';
import { AdminDefaultComponent } from './AdminPortal/admin-default/admin-default.component';
import { BillingComponent } from './AdminPortal/billing/billing.component';
import { ProfileComponent } from './AdminPortal/profile/profile.component';
import { RTLComponent } from './AdminPortal/rtl/rtl.component';
import { TablesComponent } from './AdminPortal/tables/tables.component';
import { VirtualRealityComponent } from './AdminPortal/virtual-reality/virtual-reality.component';
import { HomeComponent } from './MainPortal/home/home.component';
import { AdminSignInComponent } from './ManagementPortal/AdminManagement/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './ManagementPortal/AdminManagement/admin-sign-up/admin-sign-up.component';

const routes: Routes = [
  { path:'' , component:HomeComponent },
  { path:'home' , component:HomeComponent },
  { path:'admin-portal' , component:AdminDefaultComponent,
  children : [
    {path:'',component:AdminDashboardComponent},
    {path:'dashboard',component:AdminDashboardComponent},
    {path:'tables',component:TablesComponent},
    {path:'billings',component:BillingComponent},
    {path:'virtual-reality',component:VirtualRealityComponent},
    {path:'rtl',component:RTLComponent},
    {path:'profile',component:ProfileComponent}
  ]
 },
 { path:'admin-sign-in', component:AdminSignInComponent },
 { path:'admin-sign-up', component:AdminSignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
