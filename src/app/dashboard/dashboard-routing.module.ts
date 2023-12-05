import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./components/home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {ThingsListComponent} from "../things/components/things-list-page/things-list.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
