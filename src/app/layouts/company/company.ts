import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentCompanySharedHeader } from '@components/company/shared/header/header';
import { ComponentCompanySharedNavlink } from '@components/company/shared/navlink/navlink';
import { LucideAngularModule, Menu, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'layout-company',
  imports: [
    RouterOutlet,
    ComponentCompanySharedHeader,
    ComponentCompanySharedNavlink,
    LucideAngularModule
  ],
  templateUrl: './company.html',
})
export class LayoutCompany {

  readonly Menu = Menu;
  readonly ChevronRight = ChevronRight;

}
