import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentStoreSharedHeader } from '@components/store/shared/header/header';
import { ComponentStoreSharedNavlink } from '@components/store/shared/navlink/navlink';

@Component({
  selector: 'layout-store',
  imports: [
    RouterOutlet,
    ComponentStoreSharedHeader,
    ComponentStoreSharedNavlink,
],
  templateUrl: './store.html',
})
export class LayoutStore { }
