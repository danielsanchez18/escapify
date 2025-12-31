import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentLandingSharedCta } from '@components/landing/shared/cta/cta';
import { ComponentLandingSharedFooter } from '@components/landing/shared/footer/footer';
import { ComponentLandingSharedNavbar } from '@components/landing/shared/navbar/navbar';

@Component({
  selector: 'layout-landing',
  imports: [
    RouterOutlet,
    ComponentLandingSharedNavbar,
    ComponentLandingSharedCta,
    ComponentLandingSharedFooter,
],
  templateUrl: './landing.html',
})
export class LayoutLanding { }
