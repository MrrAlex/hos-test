import { Component, Input } from '@angular/core';
import { Thing } from '../../../things/model/things.model';
import { Container } from '../../../containers/model/container.model';

@Component({
  selector: 'hos-icon-display',
  templateUrl: './icon-display.component.html',
  styleUrls: ['./icon-display.component.scss'],
})
export class IconDisplayComponent {
  @Input()
  item!: Thing | Container | undefined;
}
