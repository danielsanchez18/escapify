import { Component } from '@angular/core';
import { ComponentLandingClientsHero } from '@components/landing/clients/hero/hero.component';
import { ComponentLandingClientsList } from '@components/landing/clients/list/list.component';
import { ComponentLandingSharedCta } from '@components/landing/shared/cta/cta';

@Component({
  selector: 'page-customer-clients',
  imports: [
    ComponentLandingClientsHero,
    ComponentLandingClientsList,
    ComponentLandingSharedCta
  ],
  templateUrl: './clients.html',
})
export class PageLandingClients { }
