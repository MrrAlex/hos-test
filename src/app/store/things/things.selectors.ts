import { createFeatureSelector, createSelector } from '@ngrx/store';
import { constainerAdapter } from '../containers';
import { ThingsState } from './things.reducer';

export const getThingsState = createFeatureSelector<ThingsState>('things');

export const selectThingsLoading = createSelector(
  getThingsState,
  (state) => state?.loading,
);

export const { selectAll } = constainerAdapter.getSelectors(getThingsState);
