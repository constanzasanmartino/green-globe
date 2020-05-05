import { Component } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { IEventoLista } from '../../models/evento-card.interface';
import { TipoEventoService } from '../../services/tipoEvento.service';
import { ITipoEventoLista } from 'src/app/models/tipoEvento.interface';
@Component({
  selector: 'app-eventos',
  templateUrl: 'eventos-page.html',
  styleUrls: ['eventos-page.scss']
})
export class EventosPage {
selectedValues:string[]=[];
  eventos: IEventoLista[];
  tipos:ITipoEventoLista[];
  constructor( private eventoService: EventoService,private tipoEventoService: TipoEventoService ) {
    this.eventoService.getEventos().subscribe(response => {
      this.eventos = response;
    })
    this.tipoEventoService.getTiposEvento().subscribe(response => {
      this.tipos = response;
    })
  }
 
  
}




