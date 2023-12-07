import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ContainersFacade } from '../../../store/containers';
import { ThingsFacade } from '../../../store/things';
import { AssignItemDto, Container } from '../../model/container.model';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  Subject,
  switchMap,
  take,
  tap,
} from 'rxjs';
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
    private _location: Location,
  ) {
    this.containerFacade.loading$.subscribe((l) => {
      this.containerLoading = l;
    });
    this.thingsFacade.loading$.subscribe((l) => {
      this.thingLoading = l;
    });
  }

  containerLoading = false;
  thingLoading = false;

  sourceItems!: any[];
  targetItems: any[] = [];
  containerId!: string;
  container!: Container | undefined;

  takenSpace = 0;
  totalSpace!: number;

  containerId$: Subject<string> = new BehaviorSubject<string>('');

  ngOnInit() {
    this.containerFacade.loadContainersList(true);
    this.thingsFacade.loadThingsList();

    this.route.params
      .pipe(
        take(1),
        tap((params) => {
          if (!params['id']) {
            throw new Error();
          }
        }),
      )
      .subscribe((params) => {
        this.containerId = params['id'];
        this.containerId$.next(this.containerId);
      });

    this.containerId$
      .pipe(
        filter((id) => !!id),
        switchMap((id) =>
          combineLatest([
            this.containerFacade.selectAvailableContainers(id),
            this.thingsFacade.availableThings$,
          ]),
        ),
      )
      .subscribe(([c, t]) => {
        this.sourceItems = [
          ...this.parseItems(
            'Container',
            c.filter((cont) => cont._id !== this.containerId),
          ),
          ...this.parseItems('Thing', t),
        ];
      });

    this.containerId$
      .pipe(
        switchMap((id) => this.containerFacade.selectEntityById$(id)),
        filter((id) => !!id),
        tap((container) => (this.container = container)),
        switchMap((container) =>
          combineLatest([
            this.thingsFacade.containerThings$(container?.things as any),
            this.containerFacade.containerContainers$(
              container?.containers as any,
            ),
          ]),
        ),
      )
      .subscribe(([things, containers]) => {
        this.totalSpace = this.container?.volume as number;
        this.takenSpace = this.container?.takenSpace as number;
        this.targetItems = [
          ...this.parseItems('Container', containers),
          ...this.parseItems('Thing', things),
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
    return items?.map((i) => ({ ...i, type })) ?? [];
  }

  calculateTotalSpace() {
    this.takenSpace = this.targetItems.reduce((acc, next) => {
      const space = next.type === 'Thing' ? next.volume : next.takenSpace;
      return acc + space;
    }, 0);
  }

  back() {
    this._location.back();
  }
}
