import { Routes } from "@angular/router";
import { LayoutCompany } from "./company";

export const COMPANY_ROUTES: Routes = [
  {
    path: '',
    component: LayoutCompany,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('@pages/company/dashboard/dashboard').then(m => m.PageCompanyDashboard)
      },
      {
        path: 'onboarding',
        loadComponent: () => import('@pages/company/onboarding/onboarding').then(m => m.PageCompanyOnboarding)
      },
    ]
  }
];
