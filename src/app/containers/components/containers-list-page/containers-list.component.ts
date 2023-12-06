import { Component } from '@angular/core';
import { ContainersFacade } from '../../../store/containers';
import { Container } from '../../model/container.model';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'hos-containers-list-page',
  templateUrl: './containers-list.component.html',
  styleUrls: ['./containers-list.component.scss'],
})
export class ContainersListComponent {
  constructor(
    private facade: ContainersFacade,
    private confirmationService: ConfirmationService,
  ) {
    this.facade.loadContainersList();
  }

  containers$ = this.facade.containers$;
  loading$ = this.facade.loading$;

  deleteContainer(container: Container) {
    this.confirmationService.confirm({
      header: 'Delete container',
      message: 'Are you sure that you want to delete this container?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.facade.deleteContainer(container);
      },
    });
  }
}
