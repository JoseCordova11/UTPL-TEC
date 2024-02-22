import { Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { authGuard } from './utils/auth.guard';
import { PerfilComponent } from './shared/perfil/perfil.component';
import { SeleccionComponent } from './shared/seleccion/seleccion.component';
import { CompTiComponent } from './shared/comp-ti/comp-ti.component';
import { CompTdeComponent } from './shared/comp-tde/comp-tde.component';
import { TablasEquivalenciaComponent } from './shared/tablas-equivalencia/tablas-equivalencia.component';
import { TiCompComponent } from './shared/ti-comp/ti-comp.component';
import { TiTdeComponent } from './shared/ti-tde/ti-tde.component';
import { TdeCompComponent } from './shared/tde-comp/tde-comp.component';
import { TdeTiComponent } from './shared/tde-ti/tde-ti.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'seleccion', component: SeleccionComponent },
  { path: 'comp-ti', component: CompTiComponent },
  { path: 'comp-tde', component: CompTdeComponent },
  { path: 'ti-comp', component: TiCompComponent },
  { path: 'ti-tde', component: TiTdeComponent },
  { path: 'tde-comp', component: TdeCompComponent },
  { path: 'tde-ti', component: TdeTiComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [authGuard] },
  { path: 'tablas', component: TablasEquivalenciaComponent,  },
];

