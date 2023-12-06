import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDisplayComponent } from './components/icon-display/icon-display.component';
import { ThingItemDisplayComponent } from './components/thing-item-display/thing-item-display.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IconDisplayComponent, ThingItemDisplayComponent],
  exports: [IconDisplayComponent, ThingItemDisplayComponent],
  imports: [CommonModule, ButtonModule, RouterModule],
})
export class SharedModule {}
