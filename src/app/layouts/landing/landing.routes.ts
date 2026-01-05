import { Routes } from "@angular/router";
import { LayoutLanding } from "./landing";
import { PageLandingHome } from "@pages/landing/home/home";

export const LANDING_ROUTES: Routes = [
  {
    path: '',
    component: LayoutLanding,
    children: [
      { path: '', component: PageLandingHome },
      {
        path: 'servicios',
        loadComponent: () => import('@pages/landing/services/services').then(m => m.PageLandingServices)
      },
      {
        path: 'planes',
        loadComponent: () => import('@pages/landing/plans/plans').then(m => m.PageLandingPlans)
      },
      {
        path: 'clientes',
        loadComponent: () => import('@pages/landing/clients/clients').then(m => m.PageLandingClients)
      }
    //   { path: 'clientes',     component: PageCustomerClients   },
    //   { path: 'demo',         component: PageCustomerDemo      },
    //   { path: 'afiliados',    component: PageCustomerPartnerts },
    //   { path: 'contactanos',  component: PageCustomerContacts
    //   { path: 'politicas',    component: PageCustomerPolicies  },
    //   { path: 'reportar-actividad', component: PageCustomerReport  }
    ]
  }
];
