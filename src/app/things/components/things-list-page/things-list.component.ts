import {Component, OnInit} from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Thing } from '../../model/things.model';
import { ThingsAddItemModalComponent } from '../things-add-item-modal/things-add-item-modal.component';
import { ThingsFacade } from '../../../store/things';
import { filter } from 'rxjs';
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'hos-things-list-page',
  templateUrl: './things-list.component.html',
  styleUrls: ['./things-list.component.scss'],
})
export class ThingsListComponent implements OnInit {
  constructor(
    private dialogService: DialogService,
    private thingsFacade: ThingsFacade,
    private confirmationService: ConfirmationService
  ) {
    this.thingsFacade.loading$.subscribe((l) => (this.loading = l));
  }

  loading = false;

  ngOnInit() {
    this.thingsFacade.loadThingsList();
  }

  modifyThing(thing?: Thing) {
    const isEdit = !!thing;
    const ref = this.dialogService.open(ThingsAddItemModalComponent, {
      header: isEdit ? `Edit ${thing.name}` : 'Add a new Thing',
      data: {
        thing,
      },
      styleClass: 'w-full lg:w-6',
    });

    ref.onClose.pipe(filter((t) => !!t)).subscribe((thing) => {
      if (isEdit) {
        this.thingsFacade.updateThing(thing);
      } else {
        this.thingsFacade.saveNewThing(thing);
      }
    });
  }

  deleteThing(thing: Thing) {
    this.confirmationService.confirm({
      header: 'Delete item',
      message: 'Are you sure that you want to delete this item?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.thingsFacade.deleteThing(thing)
      },
    });
  }
}
