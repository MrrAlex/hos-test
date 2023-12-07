import { createFeatureSelector, createSelector } from '@ngrx/store';
import { thingsAdapter, ThingsState } from './things.reducer';

export const getThingsState = createFeatureSelector<ThingsState>('things');

export const selectThingsLoading = createSelector(
  getThingsState,
  (state) => state?.loading,
);

export const selectSuccessMessage = createSelector(
  getThingsState,
  (state) => state?.successMessage,
);

export const selectErrorMessage = createSelector(
  getThingsState,
  (state) => state?.errorMessage,
);

export const { selectAll } = thingsAdapter.getSelectors(getThingsState);
export const selectAvailable = createSelector(selectAll, (all) =>
  all.filter((t) => !t.container),
);

export const selectThingsByIds = (ids: string[]) =>
  createSelector(selectAll, (all) => all.filter((t) => ids.includes(t._id)));
