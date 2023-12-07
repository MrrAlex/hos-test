import { Component, OnInit } from '@angular/core';
import { ContainersFacade } from '../../../store/containers';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Container } from '../../model/container.model';
import { Location } from '@angular/common';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'hos-containers-display-page',
  templateUrl: './containers-display-page.component.html',
  styleUrls: ['./containers-display-page.component.scss'],
})
export class ContainersDisplayPageComponent implements OnInit {
  constructor(
    private facade: ContainersFacade,
    private route: ActivatedRoute,
    private _location: Location,
    private confirmationService: ConfirmationService,
  ) {
    this.facade.loading$.subscribe((l) => (this.loading = l));
  }

  containerId!: string;
  container!: Container | undefined;
  loading = false;

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe((params) => {
      if (params['id']) {
        this.containerId = params['id'];
        this.facade.loadContainer(params['id']);
        this.facade
          .selectEntityById$(params['id'])
          .subscribe((container) => (this.container = container));
      }
    });
  }

  back() {
    this._location.back();
  }

  deleteContainer(container?: Container) {
    if (container) {
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
}
