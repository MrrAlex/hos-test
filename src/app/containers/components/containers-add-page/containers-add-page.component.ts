import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, shareReplay, take} from 'rxjs';
import { ContainersFacade } from '../../../store/containers';
import { Container } from '../../model/container.model';
import {Location} from "@angular/common";

@Component({
  selector: 'hos-containers-add-page',
  templateUrl: './containers-add-page.component.html',
  styleUrls: ['./containers-add-page.component.scss'],
})
export class ContainersAddPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private facade: ContainersFacade,
    private _location: Location,
  ) {
    this.facade.loading$.subscribe((l) => {
      this.loading = l;
    });
  }

  container$!: Observable<Container | undefined>;
  loading = false;
  containerId!: string;

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe((params) => {
      if (params['id']) {
        this.containerId = params['id'];
        this.facade.loadContainer(params['id']);
        this.container$ = this.facade.selectEntityById$(params['id']).pipe(shareReplay(1));
      }
    });
  }

  saveContainer(container: Container) {
    console.log(container);
    if (this.containerId) {
      this.facade.updateContainer(container);
    } else {
      this.facade.saveNewThing(container);
    }
  }

  back() {
    this._location.back();
  }
}
