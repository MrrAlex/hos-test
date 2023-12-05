import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ThingsActions from './things.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ThingsEndpointsService } from '../../services/things-endpoints.service';

@Injectable()
export class ThingsEffects {
  constructor(
    private actions$: Actions,
    private endpointsService: ThingsEndpointsService,
  ) {}

  loadThings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ThingsActions.loadThings),
      switchMap(() =>
        this.endpointsService.loadThings().pipe(
          map((updated) =>
            ThingsActions.loadThingsSuccess({ things: updated }),
          ),
          catchError(() => of(ThingsActions.loadThingsFail())),
        ),
      ),
    ),
  );

  createThing$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ThingsActions.saveThing),
      switchMap(({ thing }) =>
        this.endpointsService.saveThing(thing).pipe(
          map((updated) =>
            ThingsActions.saveThingSuccess({ thing: updated }),
          ),
          catchError(() => of(ThingsActions.saveThingFail())),
        ),
      ),
    ),
  );
}
