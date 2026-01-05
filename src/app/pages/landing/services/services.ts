import { Component } from '@angular/core';
import { ComponentLandingServicesHero } from '@components/landing/services/hero/hero';

@Component({
  selector: 'page-landing-services',
  imports: [
    ComponentLandingServicesHero,
  ],
  templateUrl: './services.html',
})
export class PageLandingServices { }
