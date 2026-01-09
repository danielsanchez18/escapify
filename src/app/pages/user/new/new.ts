import { Component } from '@angular/core';
import { ComponentUserNewAddCompany } from '@components/user/new/add-company/add-company';

@Component({
  selector: 'page-user-new',
  imports: [
    ComponentUserNewAddCompany,
  ],
  templateUrl: './new.html',
})
export class PageUserNew { }
