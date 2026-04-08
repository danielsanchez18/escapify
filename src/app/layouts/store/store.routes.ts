import { Routes } from "@angular/router";
import { LayoutStore } from "./store";

export const STORE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'id',
  },
  {
    path: 'crear',
    loadComponent: () => import('@pages/store/create/welcome/welcome').then(m => m.PageStoreCreateWelcome),
  },
  {
    path: 'crear/plan',
    loadComponent: () => import('@pages/store/create/select-plan/select-plan').then(m => m.PageStoreCreateSelectPlan)
  },
  {
    path: 'crear/informacion',
    loadComponent: () => import('@pages/store/create/info/info').then(m => m.PageStoreCreateInfo)
  },
  {
    path: ':id',
    component: LayoutStore,
    children: [
      {
        path: '',
        loadComponent: () => import('@pages/store/home/home').then(m => m.PageStoreHome)
      },
      {
        path: 'sucursales',
        loadComponent: () => import('@pages/store/branches/branches').then(m => m.PageStoreBranches)
      },
      {
        path: 'clientes',
        loadComponent: () => import('@pages/store/clients/clients').then(m => m.PageStoreClients)
      }
    ],
  },
];
