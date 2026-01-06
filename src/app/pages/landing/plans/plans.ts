import { Component } from '@angular/core';
import { ComponentLandingPlansPrices } from "@components/landing/plans/prices/prices";
import { ComponentLandingPlansFeatures } from "@components/landing/plans/features/features";
import { ComponentLandingSharedCta } from "@components/landing/shared/cta/cta";
import { ComponentLandingSharedQuestions } from '@components/landing/shared/questions/questions';
import { ComponentLandingSharedClients } from '@components/landing/shared/clients/clients';

@Component({
  selector: 'page-landing-plans',
  imports: [
    ComponentLandingPlansPrices,
    ComponentLandingPlansFeatures,
    ComponentLandingSharedClients,
    ComponentLandingSharedQuestions,
    ComponentLandingSharedCta
],
  templateUrl: './plans.html',
})
export class PageLandingPlans { }
