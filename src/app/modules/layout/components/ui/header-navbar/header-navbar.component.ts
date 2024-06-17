import { Component } from '@angular/core';
import type { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.scss',
})
export class HeaderNavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Products',
        icon: 'pi pi-star',
        routerLink: '/product',
      },
      {
        label: 'Stores',
        icon: 'pi pi-search',
        routerLink: '/',
      },
      {
        label: 'Categories',
        icon: 'pi pi-envelope',
        routerLink: '/',
      },
    ];
  }
}
