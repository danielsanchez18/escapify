import { Component } from '@angular/core';
import { ComponentLandingHomeModules } from '@components/landing/home/modules/modules';
import { ComponentLandingHomeHero } from '@components/landing/home/hero/hero';
import { ComponentLandingHomeRating } from '@components/landing/home/rating/rating';
import { ComponentLandingHomeFeatures } from '@components/landing/home/features/features';
import { ComponentLandingHomeAbout } from '@components/landing/home/about/about';
import { ComponentLandingHomeClients } from '@components/landing/home/clients/clients';
import { ComponentLandingHomeQuestions } from '@components/landing/home/questions/questions';
import { ComponentLandingSharedStats } from "@components/landing/shared/stats/stats";
import { ComponentLandingSharedCta } from '@components/landing/shared/cta/cta';

@Component({
  selector: 'page-landing-home',
  imports: [
    ComponentLandingHomeHero,
    ComponentLandingHomeAbout,
    ComponentLandingHomeModules,
    ComponentLandingHomeFeatures,
    ComponentLandingHomeClients,
    ComponentLandingHomeRating,
    ComponentLandingHomeQuestions,
    ComponentLandingSharedStats,
    ComponentLandingSharedCta,
],
  templateUrl: './home.html',
})
export class PageLandingHome { }
