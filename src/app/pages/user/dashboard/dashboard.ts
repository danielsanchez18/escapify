import { Component } from '@angular/core';
import { ComponentUserDashboardAddCompany } from '@components/user/dashboard/add-company/add-company';
import { ComponentUserDashboardCompaniesList } from "@components/user/dashboard/companies-list/companies-list";

@Component({
  selector: 'page-user-dashboard',
  imports: [
    ComponentUserDashboardCompaniesList,
    ComponentUserDashboardAddCompany
  ],
  templateUrl: './dashboard.html',
})
export class PageUserDashboard { }
