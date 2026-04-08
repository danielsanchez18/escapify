import { Component } from '@angular/core';
import { CreditCard, LucideAngularModule, ShoppingBag, Store, TrendingUp, Users } from 'lucide-angular';

@Component({
  selector: 'component-store-branches-stats',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './stats.html',
})
export class ComponentStoreBranchesStats {

  readonly CreditCard = CreditCard;
  readonly ShoppingBag = ShoppingBag;
  readonly TrendingUp = TrendingUp;
  readonly Store = Store;
  readonly Users = Users;

}
