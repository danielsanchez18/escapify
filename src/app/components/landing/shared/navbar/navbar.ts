import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PageAuthLoginv2 } from '@pages/auth/loginv2/loginv2';

@Component({
  selector: 'component-landing-shared-navbar',
  imports: [
    RouterModule,
    PageAuthLoginv2
],
  templateUrl: './navbar.html',
})
export class ComponentLandingSharedNavbar { }
