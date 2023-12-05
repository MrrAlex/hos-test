import { Injectable } from '@angular/core';
import { ContainerEndpointsService } from '../../services/container-endpoints.service';
import * as ContainerActions from './containers.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class ContainersEffects {
  constructor(
    private actions$: Actions,
    private endpointsService: ContainerEndpointsService,
  ) {}

  createContainer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContainerActions.saveContainer),
      switchMap(({ container }) =>
        this.endpointsService.saveContainer(container).pipe(
          map((updated) =>
            ContainerActions.saveContainerSuccess({ container: updated }),
          ),
          catchError(() => of(ContainerActions.saveContainerFail())),
        ),
      ),
    ),
  );

  loadContainers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContainerActions.loadContainers),
      switchMap(() =>
        this.endpointsService.loadContainers().pipe(
          map((updated) =>
            ContainerActions.loadContainersSuccess({ containers: updated }),
          ),
          catchError(() => of(ContainerActions.loadContainersFail())),
        ),
      ),
    ),
  );

  loadContainer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContainerActions.loadContainer),
      switchMap(({ id }) =>
        this.endpointsService.loadContainer(id).pipe(
          map((updated) =>
            ContainerActions.loadContainerSuccess({ container: updated }),
          ),
          catchError(() => of(ContainerActions.loadContainerFail())),
        ),
      ),
    ),
  );

  updateContainer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContainerActions.updateContainer),
      switchMap(({ container }) =>
        this.endpointsService.updateContainer(container).pipe(
          map((updated) =>
            ContainerActions.updateContainerSuccess({ container: updated }),
          ),
          catchError(() => of(ContainerActions.updateContainerFail())),
        ),
      ),
    ),
  );
}
