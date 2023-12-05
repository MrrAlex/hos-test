import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThingsListComponent} from "./components/things-list/things-list.component";

const routes: Routes = [{
  path: '',
  component: ThingsListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThingsRoutingModule { }
