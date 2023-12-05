import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThingsRoutingModule } from './things-routing.module';
import { ThingsListComponent } from './components/things-list-page/things-list.component';
import { ThingsListTableComponent } from './components/things-list-table/things-list-table.component';
import { ThingItemDisplayComponent } from './components/thing-item-display/thing-item-display.component';
import { ThingsAddItemModalComponent } from './components/things-add-item-modal/things-add-item-modal.component';


@NgModule({
  declarations: [
    ThingsListComponent,
    ThingsListTableComponent,
    ThingItemDisplayComponent,
    ThingsAddItemModalComponent
  ],
  imports: [
    CommonModule,
    ThingsRoutingModule
  ]
})
export class ThingsModule { }
