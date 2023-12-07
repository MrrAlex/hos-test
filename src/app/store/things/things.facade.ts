import { select, Store } from '@ngrx/store';
import { ThingsState } from './things.reducer';
import { Injectable } from '@angular/core';
import {
  selectThingsLoading,
  selectAll,
  selectAvailable,
  selectThingsByIds,
  selectErrorMessage,
  selectSuccessMessage,
} from './things.selectors';
import {
  loadThings,
  saveThing,
  updateThing,
  deleteThing,
} from './things.actions';
import { Thing } from '../../things/model/things.model';

@Injectable({
  providedIn: 'root',
})
export class ThingsFacade {
  constructor(private store: Store<ThingsState>) {}

  loading$ = this.store.pipe(select(selectThingsLoading));
  things$ = this.store.pipe(select(selectAll));
  availableThings$ = this.store.pipe(select(selectAvailable));
  errorMessage$ = this.store.pipe(select(selectErrorMessage));
  successMessage$ = this.store.pipe(select(selectSuccessMessage));

  loadThingsList() {
    this.store.dispatch(loadThings());
  }

  saveNewThing(thing: Thing) {
    this.store.dispatch(saveThing({ thing }));
  }

  updateThing(thing: Thing) {
    this.store.dispatch(updateThing({ thing }));
  }

  deleteThing(thing: Thing) {
    this.store.dispatch(deleteThing({ thing }));
  }

  containerThings$(ids: string[]) {
    return this.store.pipe(select(selectThingsByIds(ids)));
  }
}
