import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Thing } from '../../things/model/things.model';
import { createReducer, on } from '@ngrx/store';
import * as ThingsActions from './things.actions';
import { errorMessage, successMessage } from '../utils';

export interface ThingsState extends EntityState<Thing> {
  loading: boolean;
  success?: boolean;
}

export const thingsAdapter = createEntityAdapter<Thing>({
  selectId: (thing: Thing) => thing._id as string,
});

export const initialState: ThingsState = thingsAdapter.getInitialState({
  loading: false,
  success: undefined,
});

export const containerReducer = createReducer(
  initialState,
  on(ThingsActions.loadThings, (state) => ({ ...state, loading: true })),
  on(ThingsActions.loadThingsSuccess, (state, { things }) =>
    thingsAdapter.setMany(things, {
      ...state,
      ...successMessage(null),
    }),
  ),
  on(ThingsActions.loadThingsFail, (state) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.'),
  })),
  on(ThingsActions.saveThing, (state) => ({ ...state, loading: true })),
  on(ThingsActions.saveThingSuccess, (state, { thing }) =>
    thingsAdapter.setOne(thing, {
      ...state,
      ...successMessage('Thing was successfully created.'),
    }),
  ),
  on(ThingsActions.saveThingFail, (state) => ({
    ...state,
    ...errorMessage('Something went wrong, please check back later.'),
  })),
);
