import { Component, OnInit } from '@angular/core';
import { ContainersFacade } from '../../../store/containers';
import { ActivatedRoute } from '@angular/router';
import { Observable, shareReplay, take } from 'rxjs';
import { Container } from '../../model/container.model';

@Component({
  selector: 'hos-containers-display-page',
  templateUrl: './containers-display-page.component.html',
  styleUrls: ['./containers-display-page.component.scss'],
})
export class ContainersDisplayPageComponent implements OnInit {
  constructor(
    private facade: ContainersFacade,
    private route: ActivatedRoute,
  ) {}

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
}
