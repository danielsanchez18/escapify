import { Component } from '@angular/core';
import { Check, LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'component-user-dashboard-invitations',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './invitations.html',
})
export class ComponentUserDashboardInvitations {

  readonly X = X;
  readonly Check = Check;

}
