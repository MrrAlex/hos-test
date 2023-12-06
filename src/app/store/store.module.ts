import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { containerReducer, ContainersEffects } from './containers';
import { ThingsEffects, thingsReducer } from './things';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  HttpService,
  ThingsEndpointsService,
  ContainerEndpointsService,
} from '../services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('containers', containerReducer),
    StoreModule.forFeature('things', thingsReducer),
    EffectsModule.forFeature(ThingsEffects, ContainersEffects),
  ],
  providers: [HttpService, ThingsEndpointsService, ContainerEndpointsService],
})
export class AppStoreModule {}
