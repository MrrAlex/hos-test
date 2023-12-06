import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Thing} from "../../model/things.model";

@Component({
  selector: 'hos-thing-item-display',
  templateUrl: './thing-item-display.component.html',
  styleUrls: ['./thing-item-display.component.scss']
})
export class ThingItemDisplayComponent {

  @Input()
  thing!: Thing;

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

  addAsFavorite() {

  }
}
