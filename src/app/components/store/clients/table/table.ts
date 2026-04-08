import { Component } from '@angular/core';
import { ComponentStoreClientsList } from "../list/list";
import { ArrowUpDown, ChevronDown, ChevronLeft, LucideAngularModule, Search, SlidersHorizontal, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'component-store-clients-table',
  imports: [
    ComponentStoreClientsList,
    LucideAngularModule
  ],
  templateUrl: './table.html',
})
export class ComponentStoreClientsTable {

  readonly Search = Search;
  readonly SlidersHorizontal = SlidersHorizontal;
  readonly ArrowUpDown = ArrowUpDown;
  readonly ChevronDown = ChevronDown;
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

}
