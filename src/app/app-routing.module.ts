import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './pages/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { WhatWeBelieveComponent } from './pages/im-new/what-we-believe/what-we-believe.component';
import { WhoWeAreComponent }      from './pages/im-new/who-we-are/who-we-are.component';
import { BaptismComponent }      from './pages/next-steps/baptism/baptism.component';
import { HelpOutComponent } from './pages/next-steps/help-out/help-out.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'what-we-believe', component: WhatWeBelieveComponent},
  { path: 'who-we-are', component: WhoWeAreComponent},
  { path: 'baptism', component: BaptismComponent},
  { path: 'help-out', component: HelpOutComponent},
  { path: 'form', component: FormComponent},
  //todo: routing error page

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
