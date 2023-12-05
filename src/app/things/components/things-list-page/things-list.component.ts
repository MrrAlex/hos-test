import { Component } from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {Thing} from "../../model/things.model";
import {ThingsAddItemModalComponent} from "../things-add-item-modal/things-add-item-modal.component";

@Component({
  selector: 'hos-things-list-page',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.scss']
})
export class ThingsListComponent {
  constructor(private dialogService: DialogService) {
  }



  modifyThing(thing?: Thing) {
    const ref = this.dialogService.open(ThingsAddItemModalComponent, {
      header: !!thing ? `Edit ${thing.name}` : 'Add a new Thing',
      data: {
        thing,
      },
      styleClass: 'w-full lg:w-6',
    });

    ref.onClose.subscribe(() => {

    });
  }
}
