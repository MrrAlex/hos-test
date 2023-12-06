import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ThingsFacade } from '../../../store/things';
import {Thing} from "../../model/things.model";

@Component({
  selector: 'hos-things-list-table',
  templateUrl: './things-list-table.component.html',
  styleUrls: ['./things-list-table.component.scss'],
})
export class ThingsListTableComponent {
  @Input()
  loading!: boolean;

  @Output()
  thingDeleted = new EventEmitter();

  @Output()
  thingEdited = new EventEmitter();

  deleteThing(thing: Thing) {
    this.thingDeleted.emit(thing);
  }

  editThing(thing: Thing) {
    this.thingEdited.emit(thing);
  }

  constructor(private thingsFacade: ThingsFacade) {}

  things$ = this.thingsFacade.things$;
}
