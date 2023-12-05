import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { ContainersListComponent } from './components/containers-list/containers-list.component';


@NgModule({
  declarations: [
    ContainersListComponent
  ],
  imports: [
    CommonModule,
    ContainersRoutingModule
  ]
})
export class ContainersModule { }
