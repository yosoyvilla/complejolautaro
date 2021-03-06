import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {
  NgbDatepickerModule,
  NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CL';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MainnavComponent } from './mainnav/mainnav.component';

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { CONST_ROUTING } from './app.routing';
import { ComplejoComponent } from './complejo/complejo.component';
import { FooterComponent } from './footer/footer.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ReservarComponent } from './reservar/reservar.component';
import { CalendarModule } from 'angular-calendar';
import { UtilsComponent } from './utils/utils.component';
import { DtpickerComponent } from './dtpicker/dtpicker.component';
import { EventosComponent } from './eventos/eventos.component';
import { GalleryComponent } from './gallery/gallery.component';
import { trigger, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaindbComponent } from './maindb/maindb.component';
import { UserdataComponent } from './userdata/userdata.component';

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainnavComponent,
    ComplejoComponent,
    FooterComponent,
    UbicacionComponent,
    ReservarComponent,
    UtilsComponent,
    DtpickerComponent,
    EventosComponent,
    GalleryComponent,
    AdmindashboardComponent,
    MaindbComponent,
    UserdataComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpModule,
    NgxCarouselModule,
    CONST_ROUTING,
    CalendarModule.forRoot(),
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [UtilsComponent, DtpickerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
