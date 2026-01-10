import { Component } from '@angular/core';
import { ChevronDown, LucideAngularModule, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'component-company-dashboard-charts-traffic',
  imports: [
    LucideAngularModule,
  ],
  templateUrl: './charts-traffic.html',
})
export class ComponentCompanyDashboardChartsTraffic {

  readonly TrendingUp = TrendingUp;
  readonly ChevronDown = ChevronDown;


}
