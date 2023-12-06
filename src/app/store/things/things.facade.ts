import { select, Store } from '@ngrx/store';
import { ThingsState } from './things.reducer';
import { Injectable } from '@angular/core';
import { selectThingsLoading, selectAll } from './things.selectors';
import { loadThings, saveThing, updateThing, deleteThing } from './things.actions';
import { Thing } from '../../things/model/things.model';

@Injectable({
  providedIn: 'root',
})
export class ThingsFacade {
  constructor(private store: Store<ThingsState>) {}

  loading$ = this.store.pipe(select(selectThingsLoading));
  things$ = this.store.pipe(select(selectAll));

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
}
