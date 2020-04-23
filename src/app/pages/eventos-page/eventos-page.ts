import { Component } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { IEventoLista } from '../../models/evento-card.interface';

@Component({
  selector: 'app-eventos',
  templateUrl: 'eventos-page.html',
  styleUrls: ['eventos-page.scss']
})
export class EventosPage {

  eventos: IEventoLista[]

  constructor( private eventoService: EventoService ) {
    this.eventoService.getEventos().subscribe(response => {
      this.eventos = response;
    })
  }
}

