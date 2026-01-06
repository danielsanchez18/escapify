import { Component } from '@angular/core';
import { ComponentLandingHomeModules } from '@components/landing/home/modules/modules';
import { ComponentLandingHomeHero } from '@components/landing/home/hero/hero';
import { ComponentLandingHomeRating } from '@components/landing/home/rating/rating';
import { ComponentLandingHomeFeatures } from '@components/landing/home/features/features';
import { ComponentLandingHomeAbout } from '@components/landing/home/about/about';
import { ComponentLandingSharedStats } from "@components/landing/shared/stats/stats";
import { ComponentLandingSharedCta } from '@components/landing/shared/cta/cta';
import { ComponentLandingSharedClients } from '@components/landing/shared/clients/clients';
import { ComponentLandingSharedQuestions } from '@components/landing/shared/questions/questions';

@Component({
  selector: 'page-landing-home',
  imports: [
    ComponentLandingHomeHero,
    ComponentLandingHomeAbout,
    ComponentLandingHomeModules,
    ComponentLandingHomeFeatures,
    ComponentLandingSharedClients,
    ComponentLandingHomeRating,
    ComponentLandingSharedQuestions,
    ComponentLandingSharedStats,
    ComponentLandingSharedCta,
],
  templateUrl: './home.html',
})
export class PageLandingHome { }
