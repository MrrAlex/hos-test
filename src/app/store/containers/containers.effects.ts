import { Injectable } from '@angular/core';
import { ContainerEndpointsService } from '../../services/container-endpoints.service';
import * as ContainerActions from './containers.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ContainersEffects {
  constructor(
    private actions$: Actions,
    private endpointsService: ContainerEndpointsService,
    private router: Router,
  ) {}

  createContainer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContainerActions.saveContainer),
      switchMap(({ container }) =>
        this.endpointsService.saveContainer(container).pipe(
          map((updated) =>
            ContainerActions.saveContainerSuccess({ container: updated }),
          ),
          tap((updated) =>
            this.router.navigate(['/', 'containers', updated.container._id]),
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

  deleteContainer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContainerActions.deleteContainer),
      switchMap(({ container }) =>
        this.endpointsService.deleteContainer(container).pipe(
          map((updated) =>
            ContainerActions.deleteContainerSuccess({ container: updated }),
          ),
          catchError(() => of(ContainerActions.deleteContainerFail())),
        ),
      ),
    ),
  );
}
