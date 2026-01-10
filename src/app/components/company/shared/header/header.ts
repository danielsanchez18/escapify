import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Search } from 'lucide-angular';


@Component({
  selector: 'component-company-shared-header',
  imports: [
    LucideAngularModule,
    RouterModule
  ],
  templateUrl: './header.html',
})
export class ComponentCompanySharedHeader {

  readonly Search = Search;

}
