import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  selectAll,
  selectAvailable,
  selectById,
  selectContainersByIds,
  selectContainersLoading,
  selectErrorMessage,
  selectSuccessMessage,
} from './containers.selectors';
import { ContainerState } from './containers.reducer';
import {
  assignThingsToContainer,
  deleteContainer,
  loadContainer,
  loadContainers,
  saveContainer,
  updateContainer,
} from './containers.actions';
import {
  AssignItemDto,
  Container,
} from '../../containers/model/container.model';

@Injectable({
  providedIn: 'root',
})
export class ContainersFacade {
  constructor(private store: Store<ContainerState>) {}

  loading$ = this.store.pipe(select(selectContainersLoading));
  containers$ = this.store.pipe(select(selectAll));
  errorMessage$ = this.store.pipe(select(selectErrorMessage));
  successMessage$ = this.store.pipe(select(selectSuccessMessage));

  public containerContainers$(ids: string[]) {
    return this.store.pipe(select(selectContainersByIds(ids)));
  }

  public selectAvailableContainers(id: string) {
    return this.store.pipe(select(selectAvailable(id)));
  }

  public selectEntityById$(id: string) {
    return this.store.pipe(select(selectById(id)));
  }

  loadContainersList(includeChildContainers = false) {
    this.store.dispatch(loadContainers({ includeChildContainers }));
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

  assignItems(items: AssignItemDto[], id: string) {
    this.store.dispatch(assignThingsToContainer({ items, id }));
  }
}
