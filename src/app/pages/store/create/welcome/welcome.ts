import { Component } from '@angular/core';
import { ComponentStoreCreateWelcome } from '@components/store/create/welcome/welcome';

@Component({
  selector: 'page-store-create-welcome',
  imports: [
    ComponentStoreCreateWelcome
  ],
  templateUrl: './welcome.html',
})
export class PageStoreCreateWelcome { }
