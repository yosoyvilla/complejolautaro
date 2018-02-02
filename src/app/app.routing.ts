import { HomeComponent } from './home/home.component';
import { ComplejoComponent } from './complejo/complejo.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { RouterModule, Routes } from '@angular/router';
import { ReservarComponent } from './reservar/reservar.component';

const appRoutes:Routes  = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'complejo', component: ComplejoComponent },
    { path: 'ubicacion', component: UbicacionComponent },
    { path: 'reservar', component: ReservarComponent}
];
export const CONST_ROUTING = RouterModule.forRoot(appRoutes);