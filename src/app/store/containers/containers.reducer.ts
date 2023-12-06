import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Container } from '../../containers/model/container.model';
import { createReducer, on } from '@ngrx/store';
import * as ContainerActions from './containers.actions';
import { errorMessage, successMessage } from '../utils';

export interface ContainerState extends EntityState<Container> {
  loading: boolean;
  success?: boolean;
}

export const constainerAdapter = createEntityAdapter<Container>({
  selectId: (container: Container) => container._id as string,
});

export const initialState: ContainerState = constainerAdapter.getInitialState({
  loading: false,
  success: undefined,
});

export const containerReducer = createReducer(
  initialState,
  on(ContainerActions.loadContainers, (state) => ({ ...state, loading: true })),
  on(ContainerActions.loadContainersSuccess, (state, { containers }) =>
    constainerAdapter.setMany(containers, {
      ...state,
      ...successMessage(null),
    }),
  ),
  on(ContainerActions.loadContainersFail, (state) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.'),
  })),
  on(ContainerActions.loadContainer, (state) => ({ ...state, loading: true })),
  on(ContainerActions.loadContainerSuccess, (state, { container }) =>
    constainerAdapter.setOne(container, {
      ...state,
      ...successMessage(null),
    }),
  ),
  on(ContainerActions.loadContainerFail, (state) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.'),
  })),
  on(ContainerActions.saveContainer, (state) => ({ ...state, loading: true })),
  on(ContainerActions.saveContainerSuccess, (state, { container }) =>
    constainerAdapter.setOne(container, {
      ...state,
      ...successMessage('Container was successfully created.'),
    }),
  ),
  on(ContainerActions.saveContainerFail, (state) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.'),
  })),
  on(ContainerActions.deleteContainer, (state) => ({ ...state, loading: true })),
  on(ContainerActions.deleteContainerSuccess, (state, { container }) =>
    constainerAdapter.removeOne(container._id, {
      ...state,
      ...successMessage('Container was successfully removed.'),
    }),
  ),
  on(ContainerActions.deleteContainerFail, (state) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.'),
  })),
);
