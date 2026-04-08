import { Component } from '@angular/core';
import { ComponentStoreClientsTable } from "@components/store/clients/table/table";
import { ComponentStoreClientsStats } from '@components/store/clients/stats/stats';

@Component({
  selector: 'page-store-clients',
  imports: [
    ComponentStoreClientsStats,
    ComponentStoreClientsTable,
],
  templateUrl: './clients.html',
})
export class PageStoreClients { }
