import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent }          from './pages/home/home.component';
import { WhoWeAreComponent }      from './pages/im-new/who-we-are/who-we-are.component';
import { WhatWeBelieveComponent } from './pages/im-new/what-we-believe/what-we-believe.component';
import { BaptismComponent }       from './pages/next-steps/baptism/baptism.component';
import { HelpOutComponent }       from './pages/next-steps/help-out/help-out.component';
import { FormComponent }          from './pages/form/form.component';

import { HeaderComponent }  from './components/header/header.component';
import { FooterComponent }  from './components/footer/footer.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { ButtonComponent }  from './components/button/button.component';
import { JobButtonComponent } from './components/job-button/job-button.component';
import { BasePageComponent } from './components/base-page/base-page.component';

// import { SupabaseService } from './services/supabase-client.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoWeAreComponent,
    WhatWeBelieveComponent,
    BaptismComponent,
    HelpOutComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ButtonComponent,
    JobButtonComponent,
    BasePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
