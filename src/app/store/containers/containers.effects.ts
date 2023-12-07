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
          catchError((error) =>
            of(
              ContainerActions.saveContainerFail({
                message: 'error' in error ? error.error.message : '',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  loadContainers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContainerActions.loadContainers),
      switchMap(({ includeChildContainers }) =>
        this.endpointsService.loadContainers(includeChildContainers).pipe(
          map((updated) =>
            ContainerActions.loadContainersSuccess({ containers: updated }),
          ),
          catchError((error) =>
            of(
              ContainerActions.loadContainersFail({
                message: 'error' in error ? error.error.message : '',
              }),
            ),
          ),
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
          catchError((error) =>
            of(
              ContainerActions.loadContainerFail({
                message: 'error' in error ? error.error.message : '',
              }),
            ),
          ),
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
          catchError((error) =>
            of(
              ContainerActions.updateContainerFail({
                message: 'error' in error ? error.error.message : '',
              }),
            ),
          ),
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
          tap(() => this.router.navigate(['/containers'])),
          catchError((error) =>
            of(
              ContainerActions.deleteContainerFail({
                message: 'error' in error ? error.error.message : '',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  assignItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContainerActions.assignThingsToContainer),
      switchMap(({ id, items }) =>
        this.endpointsService.assignItemsToContainer(id, items).pipe(
          map(() => ContainerActions.assignThingsToContainerSuccess()),
          catchError((error) =>
            of(
              ContainerActions.assignThingsToContainerFail({
                message: 'error' in error ? error.error.message : '',
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
