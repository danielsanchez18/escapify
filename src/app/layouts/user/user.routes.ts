import { Routes } from "@angular/router";
import { LayoutUser } from "./user";

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: LayoutUser,
    children: [
      {
        path: '',
        loadComponent: () => import('@pages/user/general/general').then(m => m.PageUserGeneral)
      },
      {
        path: 'tiendas',
        loadComponent: () => import('@pages/user/stores/stores').then(m => m.PageUserStores)
      },
      {
        path: 'seguridad',
        loadComponent: () => import('@pages/user/security/security').then(m => m.PageUserSecurity)
      }
    ]
  }
];
