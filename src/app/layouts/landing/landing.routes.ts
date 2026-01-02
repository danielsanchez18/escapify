import { Routes } from "@angular/router";
import { LayoutLanding } from "./landing";
import { PageLandingHome } from "@pages/landing/home/home";
import { PageAuthLogin } from "@pages/auth/login/login";
import { PageAuthSignup } from "@pages/auth/signup/signup";

export const LANDING_ROUTES: Routes = [
  {
    path: '',
    component: LayoutLanding,
    children: [
      { path: '', component: PageLandingHome },
      {
        path: 'auth',
        children: [
          { path: 'ingresar', component: PageAuthLogin },
          { path: 'registrar', component: PageAuthSignup },
        ]
      },
      // { path: 'servicios',    component: PageCustomerServices  },
    //   { path: 'precios',      component: PageCustomerPrices    },
    //   { path: 'clientes',     component: PageCustomerClients   },
    //   { path: 'demo',         component: PageCustomerDemo      },
    //   { path: 'afiliados',    component: PageCustomerPartnerts },
    //   { path: 'contactanos',  component: PageCustomerContacts  },
    //   { path: 'politicas',    component: PageCustomerPolicies  },
    //   { path: 'reportar-actividad', component: PageCustomerReport  }
    ]
  }
];
