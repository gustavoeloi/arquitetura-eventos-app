import { Component } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css'],
})
export class ComponenteBComponent {
  textoParaEnviar: string = '';

  constructor(private eventService: EventService) {}

  emitirEvento(message: string) {
    this.eventService.emitirEvento(message);
  }
}
