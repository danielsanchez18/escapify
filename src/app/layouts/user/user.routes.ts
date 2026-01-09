import { Routes } from "@angular/router";
import { LayoutUser } from "./user";

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: LayoutUser,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('@pages/user/dashboard/dashboard').then(m => m.PageUserDashboard)
      },
      {
        path: 'nuevo',
        loadComponent: () => import('@pages/user/new/new').then(m => m.PageUserNew)
      },
    ]
  }
];
