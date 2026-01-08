import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentUserDashboardCompanies } from '@components/user/dashboard/companies/companies';
import { ComponentUserDashboardInvitations } from '@components/user/dashboard/invitations/invitations';

@Component({
  selector: 'page-user-dashboard',
  imports: [
    CommonModule,
    ComponentUserDashboardInvitations,
    ComponentUserDashboardCompanies,
  ],
  templateUrl: './dashboard.html',
})
export class PageUserDashboard {

  activeTab: 'invitations' | 'companies' = 'companies';

}
