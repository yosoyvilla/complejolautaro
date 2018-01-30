import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComplejoComponent } from './complejo/complejo.component';
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'complejo', component: ComplejoComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);