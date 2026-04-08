import { Component } from '@angular/core';
import { ComponentUserStoresEmpty } from '@components/user/stores/empty/empty';
import { ComponentUserStoresList } from "@components/user/stores/list/list";

@Component({
  selector: 'page-user-stores',
  imports: [
    ComponentUserStoresEmpty,
    ComponentUserStoresList
],
  templateUrl: './stores.html',
})
export class PageUserStores { }
