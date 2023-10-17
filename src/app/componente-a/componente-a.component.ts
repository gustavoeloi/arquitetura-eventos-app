import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css'],
})
export class ComponenteAComponent implements OnInit {
  message?: string;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.eventoEmitido.subscribe((message) => {
      this.message = message;
    });
  }
}
