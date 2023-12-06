import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Thing} from "../../../things/model/things.model";
import {Container} from "../../../containers/model/container.model";

@Component({
  selector: 'hos-thing-item-display',
  templateUrl: './thing-item-display.component.html',
  styleUrls: ['./thing-item-display.component.scss'],
})
export class ThingItemDisplayComponent implements OnInit {
  @Input()
  thing!: Thing | Container;

  @Input()
  size = 'normal';

  @Output()
  thingDeleted = new EventEmitter();

  @Output()
  thingEdited = new EventEmitter();

  deleteThing() {
    this.thingDeleted.emit(null);
  }

  editThing() {
    this.thingEdited.emit(null);
  }

  addAsFavorite() {}

  isSmall = false;

  ngOnInit() {
    this.isSmall = this.size === 'small';
  }
}
