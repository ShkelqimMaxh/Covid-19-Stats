import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';

import { AppComponent } from './app.component';
import { MainstatsComponent } from './components/mainstats/mainstats.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CountriesstatsComponent } from './components/countriesstats/countriesstats.component';
import { SinglecountryComponent } from './components/singlecountry/singlecountry.component';
import {FormsModule} from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    MainstatsComponent,
    NavbarComponent,
    NotfoundComponent,
    CountriesstatsComponent,
    SinglecountryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
