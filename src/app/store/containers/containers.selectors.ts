import {createFeatureSelector, createSelector} from "@ngrx/store";
import {constainerAdapter, ContainerState} from "./containers.reducer";

export const getContainerState = createFeatureSelector<ContainerState>('containers');

export const selectContainersLoading = createSelector(
  getContainerState,
  (state) => state?.loading
);

export const { selectAll, selectEntities } = constainerAdapter.getSelectors(getContainerState);

export const selectById = (id: string) =>
  createSelector(selectEntities, (entities) => entities && entities[id]);
