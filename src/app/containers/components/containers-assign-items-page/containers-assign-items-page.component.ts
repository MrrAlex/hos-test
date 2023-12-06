import { Component, OnInit } from '@angular/core';
import { ContainersFacade } from '../../../store/containers';
import { ThingsFacade } from '../../../store/things';
import { AssignItemDto, Container } from '../../model/container.model';
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

  takenSpace = 0;
  totalSpace!: number;

  ngOnInit() {
    this.containerFacade.loadContainersList(true);
    this.thingsFacade.loadThingsList();

    this.route.params.pipe(take(1)).subscribe((params) => {
      if (params['id']) {
        this.containerId = params['id'];
        this.containerFacade.loadContainer(params['id']);
        this.containerFacade
          .selectEntityById$(params['id'])
          .subscribe((container) => {
            this.container = container;
            this.totalSpace = container?.volume as number;
            this.takenSpace = container?.takenSpace as number;
            this.targetItems = [
              ...this.parseItems('Container', container?.containers),
              ...this.parseItems('Thing', container?.things),
            ];
          });
      }
    });

    combineLatest([
      this.containerFacade.selectAvailableContainers(this.containerId),
      this.thingsFacade.availableThings$,
    ]).subscribe(([c, t]) => {
      this.sourceItems = [
        ...this.parseItems(
          'Container',
          c.filter((cont) => cont._id !== this.containerId),
        ),
        ...this.parseItems('Thing', t),
      ];
    });
  }

  assignItems() {
    this.containerFacade.assignItems(
      this.targetItems.map(
        (i): AssignItemDto => ({ _id: i._id, type: i.type }),
      ),
      this.containerId,
    );
  }

  private parseItems(type: string, items?: any[]) {
    return items?.map((i) => ({ ...i, type, disabled: true })) ?? [];
  }

  calculateTotalSpace() {
    this.takenSpace = this.targetItems.reduce((acc, next) => {
      const space = next.type === 'Thing' ? next.volume : next.takenSpace;
      return acc + space;
    }, 0);
  }
}
