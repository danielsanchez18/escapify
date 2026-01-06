import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentUserSharedNavbar } from '@components/user/shared/navbar/navbar';

@Component({
  selector: 'layout-user',
  imports: [
    RouterOutlet,
    ComponentUserSharedNavbar,
],
  templateUrl: './user.html',
})
export class LayoutUser { }
