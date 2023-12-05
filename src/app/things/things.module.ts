import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThingsRoutingModule } from './things-routing.module';
import { ThingsListComponent } from './components/things-list/things-list.component';


@NgModule({
  declarations: [
    ThingsListComponent
  ],
  imports: [
    CommonModule,
    ThingsRoutingModule
  ]
})
export class ThingsModule { }
