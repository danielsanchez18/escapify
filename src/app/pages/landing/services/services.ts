import { Component } from '@angular/core';
import { ComponentLandingServicesFeatures } from '@components/landing/services/features/features';
import { ComponentLandingServicesHero } from '@components/landing/services/hero/hero';
import { ComponentLandingSharedStats } from "@components/landing/shared/stats/stats";
import { ComponentLandingSharedCta } from "@components/landing/shared/cta/cta";
import { ComponentLandingServicesDownload } from "@components/landing/services/download/download";
import { ComponentLandingServicesModules } from "@components/landing/services/modules/modules";

@Component({
  selector: 'page-landing-services',
  imports: [
    ComponentLandingServicesHero,
    ComponentLandingServicesFeatures,
    ComponentLandingSharedStats,
    ComponentLandingSharedCta,
    ComponentLandingServicesDownload,
    ComponentLandingServicesModules
],
  templateUrl: './services.html',
})
export class PageLandingServices { }
