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
public selectedValues:number[]=[];
  eventos: IEventoLista[];
  tipos:ITipoEventoLista[];
  listaCompletaDeEventos:IEventoLista[];
  constructor( private eventoService: EventoService,private tipoEventoService: TipoEventoService ) {
    this.eventoService.getEventos().subscribe(response => {
      this.eventos = response;
      this.listaCompletaDeEventos=response;
    })
    this.tipoEventoService.getTiposEvento().subscribe(response => {
      this.tipos = response;
    })
  }
  
 OnChange(event:any){
   if (this.selectedValues.length >0) {
    
    this.eventos=this.listaCompletaDeEventos.filter(item=>{
      for (let index = 0; index < this.selectedValues.length; index++) {
        const element = this.selectedValues[index];
        if (item.tipo==element){
            return true;  
        };
      }
      return false;
           });
          
          } 

          else{
            this.eventos=this.listaCompletaDeEventos;
          }
        }
      }

