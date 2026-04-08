import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LayoutDashboard, LucideAngularModule, Users, Store, Crown, UserLock, ClipboardMinus, Activity, Headset, MessageCircle, Bell, Settings, UserCog, HousePlus } from 'lucide-angular';

@Component({
  selector: 'component-store-shared-navlink',
  imports: [
    RouterModule,
    LucideAngularModule
  ],
  templateUrl: './navlink.html',
})
export class ComponentStoreSharedNavlink {

  private router = inject(Router);

  readonly LayoutDashboard = LayoutDashboard;
  readonly Store = Store;
  readonly Users = Users;
  readonly UserCog = UserCog;
  readonly UserLock = UserLock;
  readonly Crown = Crown;
  readonly ClipboardMinus = ClipboardMinus;
  readonly Activity = Activity;
  readonly Headset = Headset;
  readonly MessageCircle = MessageCircle;
  readonly Bell = Bell;
  readonly Settings = Settings;

  links = [
    // { href: "", text: "Inicio", icon: LayoutDashboard },
    { href: "sucursales", text: "Sucursales", icon: Store },
    { href: "clientes", text: "Clientes", icon: Users },
    { href: "trabajadores", text: "Trabajadores", icon: UserCog },
    { href: "roles", text: "Roles y Permisos", icon: UserLock },
    { href: "reportes", text: "Reportes", icon: ClipboardMinus },
    { href: "auditoria", text: "Auditoría", icon: Activity },
    { href: "soporte", text: "Soporte", icon: Headset },
    { href: "configuracion", text: "Configuración", icon: Settings },
  ];

  get storeId(): string {
    const segments = this.router.url.split('/').filter(Boolean);
    return segments[1] ?? 'id';
  }

  storeLink(path = ''): string {
    const suffix = path ? `/${path}` : '';
    return `/tienda/${this.storeId}${suffix}`;
  }


}
