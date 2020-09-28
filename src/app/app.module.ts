import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { FooterComponent } from './Layouts/footer/footer.component';

import { NavComponent } from './Layouts/nav/nav.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { FilterComponent } from './Layouts/filter/filter.component';
import { AdvertisementComponent } from './Layouts/advertisement/advertisement.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ApplyjobComponent} from './Components/applyjob-component/applyjob.component';
import {AboutComponent} from './Components/about-component/applyjob.component';

import { TopcvComponentComponent } from './Components/topcv-component/topcv-component.component';

import {RegisterComponent} from './Components/register-component/register.component';
import { CreateCVComponentComponent } from './create-cv-component/create-cv-component.component';

//import { library } from '@fortawesome/fontawesome-svg-core';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

 //import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
 //import { TooltipModule } from 'ngx-bootstrap/tooltip';
/// import { ModalModule } from 'ngx-bootstrap/modal';
//library.add(faCoffee);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    FooterComponent,
    NavComponent,
    HomePageComponent,
    FilterComponent,
    AdvertisementComponent,
    ApplyjobComponent,
    AboutComponent,
    TopcvComponentComponent,
    CreateCVComponentComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    // BsDropdownModule.forRoot(),
    // TooltipModule.forRoot(),
   //  ModalModule.forRoot()
    FontAwesomeModule
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}


