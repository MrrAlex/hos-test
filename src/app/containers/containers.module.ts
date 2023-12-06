import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { ContainersListComponent } from './components/containers-list-page/containers-list.component';
import { ContainersAddPageComponent } from './components/containers-add-page/containers-add-page.component';
import { ContainersAddFormComponent } from './components/containers-add-form/containers-add-form.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {PaginatorModule} from "primeng/paginator";
import {SelectButtonModule} from "primeng/selectbutton";
import {ReactiveFormsModule} from "@angular/forms";
import { ContainersAddFormSkeletonComponent } from './components/containers-add-form-skeleton/containers-add-form-skeleton.component';
import {SkeletonModule} from "primeng/skeleton";
import {TableModule} from "primeng/table";
import { ContainersDisplayPageComponent } from './components/containers-display-page/containers-display-page.component';
import {SharedModule} from "../shared/shared.module";
import { ContainersAssignItemsPageComponent } from './components/containers-assign-items-page/containers-assign-items-page.component';
import {PickListModule} from "primeng/picklist";


@NgModule({
  declarations: [
    ContainersListComponent,
    ContainersAddPageComponent,
    ContainersAddFormComponent,
    ContainersAddFormSkeletonComponent,
    ContainersDisplayPageComponent,
    ContainersAssignItemsPageComponent,
  ],
  imports: [
    CommonModule,
    ContainersRoutingModule,
    CardModule,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    PaginatorModule,
    SelectButtonModule,
    ReactiveFormsModule,
    SkeletonModule,
    TableModule,
    SharedModule,
    PickListModule,
  ],
})
export class ContainersModule {}
