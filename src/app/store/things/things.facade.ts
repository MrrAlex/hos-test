import {select, Store} from "@ngrx/store";
import {ThingsState} from "./things.reducer";
import {Injectable} from "@angular/core";
import {selectThingsLoading} from "./things.selectors";

@Injectable({
  providedIn: 'root',
})
export class AnswersFacade {
  constructor(private store: Store<ThingsState>) {
  }

  loading$ = this.store.pipe(select(selectThingsLoading));

}
