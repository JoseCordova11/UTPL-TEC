import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { authGuard } from './utils/auth.guard';
import { PerfilComponent } from './shared/perfil/perfil.component';
import { SeleccionComponent } from './shared/seleccion/seleccion.component';
import { CompTiComponent } from './shared/comp-ti/comp-ti.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'seleccion', component: SeleccionComponent },
  { path: 'comp-ti', component: CompTiComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

