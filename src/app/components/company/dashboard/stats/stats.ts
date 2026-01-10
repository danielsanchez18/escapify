import { Component } from '@angular/core';
import { CreditCard, LucideAngularModule, ShoppingBag, Store, TrendingUp, Users } from 'lucide-angular';

@Component({
  selector: 'component-company-dashboard-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.html',
})
export class ComponentCompanyDashboardStats {

  readonly CreditCard = CreditCard;
  readonly ShoppingBag = ShoppingBag;
  readonly TrendingUp = TrendingUp;
  readonly Store = Store;
  readonly Users = Users;


}
