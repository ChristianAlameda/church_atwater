import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { GiveComponent } from './pages/give/give.component';
import { WhatWeBelieveComponent } from './pages/im-new/what-we-believe/what-we-believe.component';
import { WhoWeAreComponent }      from './pages/im-new/who-we-are/who-we-are.component';
import { BaptismComponent }      from './pages/next-steps/baptism/baptism.component';
import { GetConnectedComponent } from './pages/next-steps/get-connected/get-connected.component';
import { HelpOutComponent } from './pages/next-steps/help-out/help-out.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'give', component: GiveComponent},
  { path: 'what-we-believe', component: WhatWeBelieveComponent},
  { path: 'who-we-are', component: WhoWeAreComponent},
  { path: 'baptism', component: BaptismComponent},
  { path: 'get-connected', component: GetConnectedComponent},
  { path: 'help-out', component: HelpOutComponent},
  { path: 'contact-us', component: ContactUsComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
