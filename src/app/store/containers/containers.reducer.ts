import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Container } from '../../containers/model/container.model';
import { createReducer, on } from '@ngrx/store';
import * as ContainerActions from './containers.actions';
import { errorMessage, successMessage } from '../utils';

export interface ContainerState extends EntityState<Container> {
  loading: boolean;
  success?: boolean;
  errorMessage: string | null;
  successMessage: string | null;
}

export const constainerAdapter = createEntityAdapter<Container>({
  selectId: (container: Container) => container._id as string,
});

export const initialState: ContainerState = constainerAdapter.getInitialState({
  loading: false,
  success: undefined,
  errorMessage: null,
  successMessage: null,
});

export const containerReducer = createReducer(
  initialState,
  on(ContainerActions.loadContainers, (state) => ({ ...state, loading: true })),
  on(ContainerActions.loadContainersSuccess, (state, { containers }) =>
    constainerAdapter.setMany(containers, {
      ...state,
      loading: false,
    }),
  ),
  on(ContainerActions.loadContainersFail, (state, { message }) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.', message),
  })),
  on(ContainerActions.loadContainer, (state) => ({ ...state, loading: true })),
  on(ContainerActions.loadContainerSuccess, (state, { container }) =>
    constainerAdapter.setOne(container, {
      ...state,
      loading: false,
    }),
  ),
  on(ContainerActions.loadContainerFail, (state, { message }) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.', message),
  })),
  on(ContainerActions.saveContainer, (state) => ({ ...state, loading: true })),
  on(ContainerActions.saveContainerSuccess, (state, { container }) =>
    constainerAdapter.setOne(container, {
      ...state,
      ...successMessage('Container was successfully created.'),
    }),
  ),
  on(ContainerActions.saveContainerFail, (state, { message }) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.', message),
  })),
  on(ContainerActions.deleteContainer, (state) => ({
    ...state,
    loading: true,
  })),
  on(ContainerActions.deleteContainerSuccess, (state, { container }) =>
    constainerAdapter.removeOne(container._id, {
      ...state,
      ...successMessage('Container was successfully removed.'),
    }),
  ),
  on(ContainerActions.deleteContainerFail, (state, { message }) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.', message),
  })),
  on(ContainerActions.assignThingsToContainer, (state) => ({
    ...state,
    loading: true,
  })),
  on(ContainerActions.assignThingsToContainerSuccess, (state, {}) => ({
    ...state,
    ...successMessage('Items were assigned to container.'),
  })),
  on(ContainerActions.assignThingsToContainerFail, (state, { message }) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.', message),
  })),
  on(ContainerActions.updateContainer, (state) => ({
    ...state,
    loading: true,
  })),
  on(ContainerActions.updateContainerSuccess, (state, {}) => ({
    ...state,
    ...successMessage('Container was successfully updated.'),
  })),
  on(ContainerActions.updateContainerFail, (state, { message }) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.', message),
  })),
);
