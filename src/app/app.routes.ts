import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layouts/landing/landing.routes').then(m => m.LANDING_ROUTES),
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
