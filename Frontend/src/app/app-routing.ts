import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./shared/login/login.component').then(c => c.LoginComponent)
    },
];