import { createAction, props } from '@ngrx/store';
import { Thing } from '../../things/model/things.model';

export const loadThings = createAction('[Container] Load Things');

export const loadThingsSuccess = createAction(
  '[Thing] Load Things Success',
  props<{ things: Thing[] }>(),
);

export const loadThingsFail = createAction(
  '[Thing] Load Things Failed',
  props<{ message: string }>(),
);

export const saveThing = createAction(
  '[Thing] Save Thing',
  props<{ thing: Thing }>(),
);

export const saveThingSuccess = createAction(
  '[Thing] Save Thing Success',
  props<{ thing: Thing }>(),
);

export const saveThingFail = createAction(
  '[Thing] Save Thing Failed',
  props<{ message: string }>(),
);

export const updateThing = createAction(
  '[Thing] Update Thing',
  props<{ thing: Thing }>(),
);

export const updateThingSuccess = createAction(
  '[Thing] Update Thing Success',
  props<{ thing: Thing }>(),
);

export const updateThingFail = createAction(
  '[Thing] Update Thing Failed',
  props<{ message: string }>(),
);

export const deleteThing = createAction(
  '[Thing] Delete Thing',
  props<{ thing: Thing }>(),
);

export const deleteThingSuccess = createAction(
  '[Thing] Delete Thing Success',
  props<{ thing: Thing }>(),
);

export const deleteThingFail = createAction(
  '[Thing] Delete Thing Failed',
  props<{ message: string }>(),
);
