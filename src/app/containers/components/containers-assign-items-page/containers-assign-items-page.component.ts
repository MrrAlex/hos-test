import { Component, OnInit } from '@angular/core';
import { ContainersFacade } from '../../../store/containers';
import { ThingsFacade } from '../../../store/things';
import { Thing } from '../../../things/model/things.model';
import { Container } from '../../model/container.model';
import { combineLatest, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hos-containers-assign-items-page',
  templateUrl: './containers-assign-items-page.component.html',
  styleUrls: ['./containers-assign-items-page.component.scss'],
})
export class ContainersAssignItemsPageComponent implements OnInit {
  constructor(
    private containerFacade: ContainersFacade,
    private thingsFacade: ThingsFacade,
    private route: ActivatedRoute,
  ) {}

  sourceItems!: any[];
  targetItems: any[] = [];
  containerId!: string;
  container!: Container | undefined;

  ngOnInit() {
    this.containerFacade.loadContainersList();
    this.thingsFacade.loadThingsList();

    this.route.params.pipe(take(1)).subscribe((params) => {
      if (params['id']) {
        this.containerId = params['id'];
        this.containerFacade.loadContainer(params['id']);
        this.containerFacade
          .selectEntityById$(params['id'])
          .subscribe((container) => {
            this.container = container;
            this.targetItems = [
              ...this.parseItems('Container', container?.containers),
              ...this.parseItems('Thing', container?.things),
            ];
          });
      }
    });

    combineLatest([
      this.containerFacade.containers$,
      this.thingsFacade.things$,
    ]).subscribe(([c, t]) => {
      this.sourceItems = [
        ...this.parseItems('Container', c),
        ...this.parseItems('Thing', t),
      ];
    });
  }

  assignItems() {
    this.containerFacade.assignItems(this.targetItems, this.containerId);
  }

  private parseItems(type: string, items?: any[]) {
    return items?.map((i) => ({ ...i, type })) ?? [];
  }
}
