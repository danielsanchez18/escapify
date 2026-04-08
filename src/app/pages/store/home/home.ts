import { Component } from '@angular/core';
import { ComponentStoreHomeAction } from "@components/store/home/action/action";
import { ComponentStoreHomeStats } from "@components/store/home/stats/stats";
import { ComponentStoreHomeChartsTraffic } from "@components/store/home/charts-traffic/charts-traffic";
import { ComponentStoreHomeChartsComparative } from "@components/store/home/charts-comparative/charts-comparative";

@Component({
  selector: 'page-store-home',
  imports: [
    ComponentStoreHomeAction,
    ComponentStoreHomeStats,
    ComponentStoreHomeChartsTraffic,
    ComponentStoreHomeChartsComparative,

],
  templateUrl: './home.html',
})
export class PageStoreHome { }
