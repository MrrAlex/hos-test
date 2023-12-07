import { createAction, props } from '@ngrx/store';
import {AssignItemDto, Container} from '../../containers/model/container.model';

export const loadContainers = createAction('[Container] Load Containers',
  props<{ includeChildContainers: boolean }>(),);

export const loadContainersSuccess = createAction(
  '[Container] Load Containers Success',
  props<{ containers: Container[] }>(),
);

export const loadContainersFail = createAction(
  '[Container] Load Containers Failed',
  props<{ message: string }>(),
);

export const saveContainer = createAction(
  '[Container] Save Container',
  props<{ container: Container }>(),
);

export const saveContainerSuccess = createAction(
  '[Container] Save Container Success',
  props<{ container: Container }>(),
);

export const saveContainerFail = createAction(
  '[Container] Save Container Failed',
  props<{ message: string }>(),
);

export const assignThingsToContainer = createAction(
  '[Container] Assign Things',
  props<{ items: AssignItemDto[], id: string }>(),
);

export const assignThingsToContainerSuccess = createAction('[Container] Assign Things Success');

export const assignThingsToContainerFail = createAction(
  '[Container] Assign Things Failed',
  props<{ message: string }>(),
);

export const loadContainer = createAction(
  '[Container] Load Container',
  props<{ id: string }>(),
);

export const loadContainerSuccess = createAction(
  '[Container] Load Container Success',
  props<{ container: Container }>(),
);

export const loadContainerFail = createAction(
  '[Container] Load Container Failed',
  props<{ message: string }>(),
);

export const updateContainer = createAction(
  '[Container] Update Container',
  props<{ container: Container }>(),
);

export const updateContainerSuccess = createAction(
  '[Container] Update Container Success',
  props<{ container: Container }>(),
);

export const updateContainerFail = createAction(
  '[Container] Update Container Failed',
  props<{ message: string }>(),
);

export const deleteContainer = createAction(
  '[Container] Delete Container',
  props<{ container: Container }>(),
);

export const deleteContainerSuccess = createAction(
  '[Container] Delete Container Success',
  props<{ container: Container }>(),
);

export const deleteContainerFail = createAction(
  '[Container] Delete Container Failed',
  props<{ message: string }>(),
);
