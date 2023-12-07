import { Component } from '@angular/core';
import { ContainersFacade } from './store/containers';
import { ThingsFacade } from './store/things';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private container: ContainersFacade,
    private thing: ThingsFacade,
    private messageService: MessageService,
  ) {
    this.container.successMessage$.subscribe((message) => {
      console.log(1);
      this.successMessage(message as string)
    });
    this.container.errorMessage$.subscribe((message) => {
      console.log(2);
      this.errorMessage(message as string)
    });
    this.thing.successMessage$.subscribe((message) => {
      console.log(3);
      this.successMessage(message as string)
    });
    this.thing.errorMessage$.subscribe((message) => {
      console.log(4);
      this.errorMessage(message as string)
    });
  }

  private successMessage(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: message as string,
    });
  }

  private errorMessage(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: message as string,
    });
  }
}
