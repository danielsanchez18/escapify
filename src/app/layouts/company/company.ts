import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentCompanySharedNavbar } from '@components/company/shared/navbar/navbar';
import { ComponentCompanySharedSidebar } from '@components/company/shared/sidebar/sidebar';

@Component({
  selector: 'layout-company',
  imports: [
    RouterOutlet,
    ComponentCompanySharedNavbar,
    ComponentCompanySharedSidebar
  ],
  templateUrl: './company.html',
})
export class LayoutCompany { }
