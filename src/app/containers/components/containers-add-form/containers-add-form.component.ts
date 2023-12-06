import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { Container } from '../../model/container.model';

@Component({
  selector: 'hos-containers-add-form',
  templateUrl: './containers-add-form.component.html',
  styleUrls: ['./containers-add-form.component.scss'],
})
export class ContainersAddFormComponent {
  constructor(private fb: UntypedFormBuilder) {}

  @Input()
  container!: Container | null | undefined;

  @Output()
  saved = new EventEmitter<Container>();

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

  isEdit!: boolean;
  containerForm!: FormGroup;

  ngOnInit() {
    this.containerForm = this.fb.group({
      name: this.fb.control(this.container?.name ?? '', Validators.required),
      volume: this.fb.control(this.container?.volume ?? 0, [
        Validators.required,
        Validators.min(this.container?.takenSpace ?? 0),
      ]),
      icon: this.fb.control(
        this.container?.icon ?? PrimeIcons.BAN,
        Validators.required,
      ),
      description: this.fb.control(
        this.container?.description ?? '',
        Validators.required,
      ),
    });
  }

  get name(): FormControl<string> {
    return this.containerForm.get('name') as FormControl<string>;
  }

  get volume(): FormControl<number> {
    return this.containerForm.get('volume') as FormControl<number>;
  }

  get icon(): FormControl<string> {
    return this.containerForm.get('icon') as FormControl<string>;
  }

  get description(): FormControl<string> {
    return this.containerForm.get('description') as FormControl<string>;
  }

  goSave() {
    if (this.containerForm.valid) {
      const result = this.container
        ? { ...this.container, ...this.containerForm.value }
        : this.containerForm.value;
      this.saved.emit(result);
    }
  }
}
