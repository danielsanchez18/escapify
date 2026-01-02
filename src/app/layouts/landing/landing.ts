import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentLandingSharedFooter } from '@components/landing/shared/footer/footer';
import { ComponentLandingSharedNavbar } from '@components/landing/shared/navbar/navbar';

@Component({
  selector: 'layout-landing',
  imports: [
    RouterOutlet,
    ComponentLandingSharedNavbar,
    ComponentLandingSharedFooter,
],
  templateUrl: './landing.html',
})
export class LayoutLanding { }
