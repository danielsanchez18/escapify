import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentUserSharedNavbar } from '@components/user/shared/navbar/navbar';
import { ComponentUserSharedSidebard } from "@components/user/shared/sidebard/sidebard";

@Component({
  selector: 'layout-user',
  imports: [
    RouterOutlet,
    ComponentUserSharedNavbar,
    ComponentUserSharedSidebard
],
  templateUrl: './user.html',
})
export class LayoutUser { }
