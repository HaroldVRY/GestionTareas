import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../service/menu.service';
import { MenuItem } from 'primeng/api';
import { filter, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentLabel: string = '';
  items: MenuItem[] | undefined;

  private routerSubscription!: Subscription;

  constructor(
    private router: Router,
    private menuService: MenuService
  ) {
    this.items = [
      {
        label: 'usuario',
        items: [
          { separator: true },
          // {
          //   label: 'Mi perfil',
          //   icon: 'pi pi-user',
          //   routerLink: '/home/usuario'
          // },
          // {
          //   label: 'Configuración',
          //   icon: 'pi pi-cog',
          //   routerLink: '/home/configuracion'
          // },
          // {
          //   label: 'Ayuda y Asistencia',
          //   icon: 'pi pi-question',
          //   routerLink: '/home/configuracion'
          // },
          {
            label: 'Regresar al menu',
            icon: 'pi pi-home',
            command: () => {
              // Redirigir al menú principal
              //TODO: Hacer una validación que desea regresar al menú principal
              window.location.href = 'https://nocb.nettalco.com.pe/intranet/sso/menu';

            },
          }
        ]
      }
    ];
  }

  ngOnInit() {
    const currentUrl = this.router.url;
    this.findLabelForUrl(currentUrl);

    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const newUrl = event.urlAfterRedirects;
        this.findLabelForUrl(newUrl);
        console.log('hola')
      });
  }

  private findLabelForUrl(url: string) {
    const items = this.menuService.getMenuItems();
    for (const item of items) {
      if (item.ruta && url.startsWith(item.ruta)) {
        this.currentLabel = item.nombre;
        return;
      }
    }

    // Si no se encontró coincidencia
    this.currentLabel = '';
  }


  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
