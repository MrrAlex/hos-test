import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainersListComponent } from './components/containers-list-page/containers-list.component';
import {ContainersAddPageComponent} from "./components/containers-add-page/containers-add-page.component";

const routes: Routes = [
  {
    path: '',
    component: ContainersListComponent,
  },
  {
    path: 'add',
    component: ContainersAddPageComponent,
  },
  {
    path: ':id/edit',
    component: ContainersAddPageComponent,
  },
  {
    path: ':id',
    component: ContainersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainersRoutingModule {}
