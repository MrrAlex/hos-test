import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Thing } from '../../things/model/things.model';
import { createReducer, on } from '@ngrx/store';
import * as ThingsActions from './things.actions';
import { errorMessage, successMessage } from '../utils';

export interface ThingsState extends EntityState<Thing> {
  loading: boolean;
  success?: boolean;
  errorMessage: string | null;
  successMessage: string | null;
}

export const thingsAdapter = createEntityAdapter<Thing>({
  selectId: (thing: Thing) => thing._id as string,
});

export const initialState: ThingsState = thingsAdapter.getInitialState({
  loading: false,
  success: undefined,
  errorMessage: null,
  successMessage: null,
});

export const thingsReducer = createReducer(
  initialState,
  on(ThingsActions.loadThings, (state) => ({ ...state, loading: true })),
  on(ThingsActions.loadThingsSuccess, (state, { things }) =>
    thingsAdapter.setMany(things, {
      ...state,
      loading: false,
    }),
  ),
  on(ThingsActions.loadThingsFail, (state, { message }) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.', message),
  })),
  on(ThingsActions.saveThing, (state) => ({ ...state, loading: true })),
  on(ThingsActions.saveThingSuccess, (state, { thing }) =>
    thingsAdapter.setOne(thing, {
      ...state,
      ...successMessage('Thing was successfully created.'),
    }),
  ),
  on(ThingsActions.saveThingFail, (state, { message }) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.', message),
  })),
  on(ThingsActions.updateThing, (state) => ({ ...state, loading: true })),
  on(ThingsActions.updateThingSuccess, (state, { thing }) =>
    thingsAdapter.setOne(thing, {
      ...state,
      ...successMessage('Thing was successfully updated.'),
    }),
  ),
  on(ThingsActions.updateThingFail, (state, { message }) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.', message),
  })),
  on(ThingsActions.deleteThing, (state) => ({ ...state, loading: true })),
  on(ThingsActions.deleteThingSuccess, (state, { thing }) =>
    thingsAdapter.removeOne(thing._id, {
      ...state,
      ...successMessage('Thing was successfully deleted.'),
    }),
  ),
  on(ThingsActions.deleteThingFail, (state, { message }) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.', message),
  })),
);
