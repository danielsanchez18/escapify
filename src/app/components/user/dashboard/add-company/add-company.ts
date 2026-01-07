import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Building2, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'component-user-dashboard-add-company',
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule
  ],
  templateUrl: './add-company.html',
})
export class ComponentUserDashboardAddCompany {

  readonly Building2 = Building2;

}
