import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutDashboard, LucideAngularModule, Users, Store, Crown, UserLock, ClipboardMinus, Activity, Headset, MessageCircle, Bell, Cog, Settings, MapPinHouse } from 'lucide-angular';

@Component({
  selector: 'component-company-shared-navlink',
  imports: [
    RouterModule,
    LucideAngularModule
  ],
  templateUrl: './navlink.html',
})
export class ComponentCompanySharedNavlink {

  readonly LayoutDashboard = LayoutDashboard;
  readonly Store = Store;
  readonly MapPinHouse = MapPinHouse;
  readonly Users = Users;
  readonly UserLock = UserLock;
  readonly Crown = Crown;
  readonly ClipboardMinus = ClipboardMinus;
  readonly Activity = Activity;
  readonly Headset = Headset;
  readonly MessageCircle = MessageCircle;
  readonly Bell = Bell;
  readonly Settings = Settings;

  links = [
    { href: "dashboard", text: "Overview", icon: LayoutDashboard },
    { href: "sucursales", text: "Sucursales", icon: MapPinHouse },
    { href: "suscripciones", text: "Suscripciones", icon: Crown },
    { href: "usuarios", text: "Usuarios", icon: Users },
    { href: "roles", text: "Roles y Permisos", icon: UserLock },
    { href: "configuracion", text: "Configuración", icon: Settings },
  ];


}
