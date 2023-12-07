import { createFeatureSelector, createSelector } from '@ngrx/store';
import { constainerAdapter, ContainerState } from './containers.reducer';

export const getContainerState =
  createFeatureSelector<ContainerState>('containers');

export const selectContainersLoading = createSelector(
  getContainerState,
  (state) => state?.loading,
);

export const selectSuccessMessage = createSelector(
  getContainerState,
  (state) => state?.successMessage,
);

export const selectErrorMessage = createSelector(
  getContainerState,
  (state) => state?.errorMessage,
);

export const { selectAll, selectEntities } =
  constainerAdapter.getSelectors(getContainerState);

export const selectById = (id: string) =>
  createSelector(selectEntities, (entities) => entities && entities[id]);

export const selectAvailable = (id: string) =>
  createSelector(selectAll, (all) =>
    all.filter((c) => {
      if (c.container) {
        return false;
      }
      if (c.containers) {
        return !(c.containers as any).includes(id);
      }
      return true;
    }),
  );

export const selectContainersByIds = (ids: string[]) =>
  createSelector(selectAll, (all) => all.filter((t) => ids.includes(t._id)));
