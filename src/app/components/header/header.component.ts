import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'hos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/'
    },
    {
      label: 'My Things',
      icon: 'pi pi-key',
      routerLink: '/things',
    },
    {
      label: 'My Containers',
      icon: 'pi pi-box',
      routerLink: '/containers',
    },
  ];
}
