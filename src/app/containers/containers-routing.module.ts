import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainersListComponent } from './components/containers-list/containers-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContainersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainersRoutingModule {}
