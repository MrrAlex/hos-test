import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThingsRoutingModule } from './things-routing.module';
import { ThingsListComponent } from './components/things-list-page/things-list.component';
import { ThingsListTableComponent } from './components/things-list-table/things-list-table.component';
import { ThingItemDisplayComponent } from '../shared/components/thing-item-display/thing-item-display.component';
import { ThingsAddItemModalComponent } from './components/things-add-item-modal/things-add-item-modal.component';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ThingsListComponent,
    ThingsListTableComponent,
    ThingsAddItemModalComponent,
  ],
  imports: [
    CommonModule,
    ThingsRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    PaginatorModule,
    SelectButtonModule,
    SkeletonModule,
    InputTextareaModule,
    SharedModule,
  ],
  providers: [DialogService],
})
export class ThingsModule {}
