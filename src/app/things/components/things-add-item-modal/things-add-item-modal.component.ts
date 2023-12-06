import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Thing } from '../../model/things.model';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'hos-things-add-item-modal',
  templateUrl: './things-add-item-modal.component.html',
  styleUrls: ['./things-add-item-modal.component.scss'],
})
export class ThingsAddItemModalComponent implements OnInit {
  constructor(
    private fb: UntypedFormBuilder,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
  ) {}

  containerOptions = [
    PrimeIcons.BAN,
    PrimeIcons.BOX,
    PrimeIcons.BRIEFCASE,
    PrimeIcons.CAR,
    PrimeIcons.FOLDER,
    PrimeIcons.GIFT,
    PrimeIcons.INBOX,
    PrimeIcons.TRASH,
    PrimeIcons.TRUCK,
  ];
  thingsOptions: any[] = [
    PrimeIcons.BAN,
    PrimeIcons.ANDROID,
    PrimeIcons.APPLE,
    PrimeIcons.BELL,
    PrimeIcons.CALCULATOR,
    PrimeIcons.CALENDAR,
    PrimeIcons.CAMERA,
    PrimeIcons.CLOCK,
    PrimeIcons.FILE,
    PrimeIcons.ID_CARD,
    PrimeIcons.KEY,
    PrimeIcons.MOBILE,
    PrimeIcons.VIDEO,
    PrimeIcons.WALLET,
    PrimeIcons.WRENCH,
  ];

  isEdit!: boolean;
  thing!: Thing;
  thingGroup!: FormGroup;

  ngOnInit() {
    this.thing = this.config.data.thing;
    this.isEdit = !!this.thing;
    this.thingGroup = this.fb.group({
      name: this.fb.control(this.thing?.name ?? '', Validators.required),
      volume: this.fb.control(this.thing?.volume ?? 0, [Validators.required]),
      icon: this.fb.control(this.thing?.icon ?? PrimeIcons.BAN, Validators.required),
      description: this.fb.control(this.thing?.description ?? '', Validators.required),
    });
  }

  get name(): FormControl<string> {
    return this.thingGroup.get('name') as FormControl<string>;
  }

  get volume(): FormControl<number> {
    return this.thingGroup.get('volume') as FormControl<number>;
  }

  get icon(): FormControl<string> {
    return this.thingGroup.get('icon') as FormControl<string>;
  }

  get description(): FormControl<string> {
    return this.thingGroup.get('description') as FormControl<string>;
  }

  goSave() {
    if (this.thingGroup.valid) {
      const result = this.isEdit
        ? { ...this.thing, ...this.thingGroup.value,  }
        : this.thingGroup.value;
      this.ref.close(result);
    }
  }

  close() {
    this.ref.close();
  }
}
