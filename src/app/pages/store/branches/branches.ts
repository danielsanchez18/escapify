import { Component } from '@angular/core';
import { ComponentStoreBranchesList } from "@components/store/branches/list/list";
import { ComponentStoreBranchesStats } from "@components/store/branches/stats/stats";
import { ComponentStoreBranchesAdd } from "@components/store/branches/add/add";
import { ComponentStoreBranchesEmpty } from "@components/store/branches/empty/empty";

@Component({
  selector: 'page-store-branches',
  imports: [
    ComponentStoreBranchesList,
    ComponentStoreBranchesStats,
    ComponentStoreBranchesAdd,
    ComponentStoreBranchesEmpty
],
  templateUrl: './branches.html',
})
export class PageStoreBranches { }
