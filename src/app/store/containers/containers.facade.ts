import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  selectAll,
  selectById,
  selectContainersLoading,
} from './containers.selectors';
import { ContainerState } from './containers.reducer';
import {
  deleteContainer,
  loadContainer,
  loadContainers,
  saveContainer,
  updateContainer,
  assignThingsToContainer,
} from './containers.actions';
import { Container } from '../../containers/model/container.model';

@Injectable({
  providedIn: 'root',
})
export class ContainersFacade {
  constructor(private store: Store<ContainerState>) {}

  loading$ = this.store.pipe(select(selectContainersLoading));
  containers$ = this.store.pipe(select(selectAll));

  public selectEntityById$(id: string) {
    return this.store.pipe(select(selectById(id)));
  }

  loadContainersList() {
    this.store.dispatch(loadContainers());
  }

  saveNewThing(container: Container) {
    this.store.dispatch(saveContainer({ container }));
  }

  loadContainer(id: string) {
    this.store.dispatch(loadContainer({ id }));
  }

  updateContainer(container: Container) {
    this.store.dispatch(updateContainer({ container }));
  }

  deleteContainer(container: Container) {
    this.store.dispatch(deleteContainer({ container }));
  }

  assignItems(items: any[], id: string) {
    this.store.dispatch(assignThingsToContainer({ items, id }));
  }
}
