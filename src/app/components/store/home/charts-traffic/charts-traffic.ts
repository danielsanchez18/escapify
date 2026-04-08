import { Component } from '@angular/core';
import { ChevronDown, LucideAngularModule, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'component-store-home-charts-traffic',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './charts-traffic.html',
})
export class ComponentStoreHomeChartsTraffic {

  readonly TrendingUp = TrendingUp;
  readonly ChevronDown = ChevronDown;

}
