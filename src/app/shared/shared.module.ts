import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDisplayComponent } from './components/icon-display/icon-display.component';



@NgModule({
  declarations: [IconDisplayComponent],
  exports: [IconDisplayComponent],
  imports: [CommonModule],
})
export class SharedModule {}
