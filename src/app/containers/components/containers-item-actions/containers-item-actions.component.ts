import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Container } from '../../model/container.model';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';

@Component({
  selector: 'hos-containers-item-actions',
  templateUrl: './containers-item-actions.component.html',
  styleUrls: ['./containers-item-actions.component.scss'],
})
export class ContainersItemActionsComponent implements OnInit {
  items!: MenuItem[];

  @Input()
  isView = false;

  @Input()
  container: Container | undefined;

  @Output()
  delete = new EventEmitter();

  ngOnInit() {
    this.items = [
      {
        label: 'Assign Items',
        icon: 'pi pi-align-center',
        routerLink: `/containers/${this.container?._id}/assign`,
      },
      {
        label: 'Edit',
        icon: 'pi pi-external-link',
        routerLink: `/containers/${this.container?._id}/edit`,
      },
      ...(this.isView
        ? []
        : [
          {
            label: 'View',
            icon: 'pi pi-eye',
            routerLink: `/containers/${this.container?._id}`,
          },
        ]),
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: (event: MenuItemCommandEvent) => {
          this.delete.emit(null);
        },
      },
    ];
  }
}
