import { Component } from '@angular/core';
import { ComponentStoreCreateSelectPlan } from '@components/store/create/select-plan/select-plan';
import { ComponentStoreCreatePayment } from "@components/store/create/payment/payment";

@Component({
  selector: 'page-store-create-select-plan',
  imports: [
    ComponentStoreCreateSelectPlan,
    ComponentStoreCreatePayment
],
  templateUrl: './select-plan.html',
})
export class PageStoreCreateSelectPlan { }
