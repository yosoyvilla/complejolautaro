import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { MainnavComponent } from './mainnav/mainnav.component';

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { CONST_ROUTING } from './app.routing';
import { ComplejoComponent } from './complejo/complejo.component';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    LoginComponent,
    NavbarComponent,
    TableComponent,
    HomeComponent,
    MainnavComponent,
    ComplejoComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpModule,
    NgxCarouselModule,
    CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
