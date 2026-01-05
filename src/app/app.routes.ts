import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/landing/landing.routes').then(m => m.LANDING_ROUTES),
  },
  {
    path: 'auth',
    children: [
      {
        path: 'ingresar',
        loadComponent: () => import('./pages/auth/login/login').then(m => m.PageAuthLogin),
      },
      {
        path: 'registrar',
        loadComponent: () => import('./pages/auth/signup/signup').then(m => m.PageAuthSignup),
      }
    ]
  },
  {
    path: '',
    loadChildren: () => import('./layouts/user/user.routes').then(m => m.USER_ROUTES),
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
