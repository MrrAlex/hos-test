import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {HeaderComponent} from './components/header/header.component';
import {MenubarModule} from "primeng/menubar";
import { HomeComponent } from './dashboard/components/home/home.component';
import {DialogModule} from "primeng/dialog";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [{
  path: 'dashboard',
  loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
}, {
  path: 'things',
  loadChildren:() => import('./things/things.module').then(m => m.ThingsModule)
}, {
  path: 'containers',
  loadChildren:() => import('./containers/containers.module').then(m => m.ContainersModule)
},
  {
    path: '*',
    redirectTo: 'dashboard'
  }];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    MenubarModule,
    RouterModule.forRoot(routes),
    DialogModule,
    ConfirmDialogModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
