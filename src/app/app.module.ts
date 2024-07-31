import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent }          from './pages/home/home.component';
import { WhoWeAreComponent }      from './pages/im-new/who-we-are/who-we-are.component';
import { WhatWeBelieveComponent } from './pages/im-new/what-we-believe/what-we-believe.component';
import { GetConnectedComponent }  from './pages/next-steps/get-connected/get-connected.component';
import { BaptismComponent }       from './pages/next-steps/baptism/baptism.component';
import { HelpOutComponent }       from './pages/next-steps/help-out/help-out.component';
import { GiveComponent }          from './pages/give/give.component';
import { FormComponent }          from './pages/form/form.component';
import { ContactUsComponent }     from './pages/contact-us/contact-us.component';

import { HeaderComponent }  from './components/header/header.component';
import { FooterComponent }  from './components/footer/footer.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { ButtonComponent }  from './components/button/button.component';

// import { SupabaseService } from './services/supabase-client.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoWeAreComponent,
    WhatWeBelieveComponent,
    GetConnectedComponent,
    BaptismComponent,
    HelpOutComponent,
    GiveComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ButtonComponent,
    ContactUsComponent,
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
