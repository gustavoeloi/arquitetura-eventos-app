import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  public eventoEmitido: EventEmitter<string> = new EventEmitter();

  emitirEvento(message: string) {
    this.eventoEmitido.emit(message);
  }
}
