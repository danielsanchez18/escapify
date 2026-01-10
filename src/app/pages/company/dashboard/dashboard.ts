import { Component } from '@angular/core';
import { ChartColumn, Download, EllipsisIcon, LucideAngularModule } from 'lucide-angular';
import { ComponentCompanyDashboardStats } from "@components/company/dashboard/stats/stats";
import { ComponentCompanyDashboardChartsTraffic } from "@components/company/dashboard/charts-traffic/charts-traffic";
import { ComponentCompanyDashboardChartsComparative } from "@components/company/dashboard/charts-comparative/charts-comparative";

@Component({
  selector: 'page-company-dashboard',
  imports: [
    LucideAngularModule,
    ComponentCompanyDashboardStats,
    ComponentCompanyDashboardChartsTraffic,
    ComponentCompanyDashboardChartsComparative
],
  templateUrl: './dashboard.html',
})
export class PageCompanyDashboard {

  readonly EllipsisIcon = EllipsisIcon;
  readonly ChartColumn = ChartColumn;
  readonly Download = Download;

}
