import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {HeaderComponent} from './components/header/header.component';
import {MenubarModule} from "primeng/menubar";
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'things',
  loadChildren:() => import('./things/things.module').then(m => m.ThingsModule)
}, {
  path: 'containers',
  loadChildren:() => import('./containers/containers.module').then(m => m.ContainersModule)
}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    MenubarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
