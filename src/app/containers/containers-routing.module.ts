import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainersListComponent } from './components/containers-list-page/containers-list.component';
import { ContainersAddPageComponent } from './components/containers-add-page/containers-add-page.component';
import { ContainersDisplayPageComponent } from './components/containers-display-page/containers-display-page.component';
import { ContainersAssignItemsPageComponent } from './components/containers-assign-items-page/containers-assign-items-page.component';

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
    path: ':id/assign',
    component: ContainersAssignItemsPageComponent,
  },
  {
    path: ':id',
    component: ContainersDisplayPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainersRoutingModule {}
