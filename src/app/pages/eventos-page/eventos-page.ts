import { Component } from '@angular/core';

import { EventoService } from '../../services/evento.service';

import { IEvento } from '../../models/evento.interface';
import { ITipoEvento } from 'src/app/models/tipo-evento.interface';



@Component({
  selector: 'app-eventos',
  templateUrl: 'eventos-page.html',
  styleUrls: ['eventos-page.scss']

})
export class EventosPage {

  public selectedValues: number[] = [];
  eventos: IEvento[];
  tipos: ITipoEvento[];
  listaCompletaDeEventos: IEvento[];

  eventosFinalizados: IEvento[] = [];
  eventosEnProgreso: IEvento[] = [];

  all: boolean = false;
  loading: boolean = true;
  showFilters: boolean = false;

  constructor(private eventoService: EventoService) {

    this.eventoService.getEventos().subscribe(response => {
      this.eventos = response;
      this.listaCompletaDeEventos = response;
      this.eventosEnProgreso = this.listaCompletaDeEventos.filter(e => new Date(e.fechaInicio) > new Date)
      this.eventos = this.eventosEnProgreso
      this.loading = false;
    })

    this.eventoService.getTiposEvento().subscribe(response => {
      this.tipos = response;
    })

  }

  segmentChanged(event) {
    let fechaHoy = new Date
    if (event == 'finalizados') {
      this.eventosFinalizados = this.listaCompletaDeEventos.filter(e => new Date(e.fechaInicio) < new Date)
      this.eventos = this.eventosFinalizados
    }
    if (event == 'enProgreso') {
      this.eventosEnProgreso = this.listaCompletaDeEventos.filter(e => new Date(e.fechaInicio) > new Date)
      this.eventos = this.eventosEnProgreso
    }
  }

  /* OnChange(event: any) {
     console.log(event);
     if (this.selectedValues.length > 0) {
       
       this.eventos = this.listaCompletaDeEventos.filter(item => {
         for (let index = 0; index < this.selectedValues.length; index++) {
           const element = this.selectedValues[index];
           if (item.tipo == element) {
             return true;
           };
         }
         return false;
       });
     }
 
    else {
       this.eventos = this.listaCompletaDeEventos;
     }
     */
  filtrar(event: any) {
    if (this.all) {
      this.eventos = this.listaCompletaDeEventos;
    }
    else {
      this.selectedValues = [];
      for (let index = 0; index < this.tipos.length; index++) {
        if (this.tipos[index].cheked) {
          this.selectedValues.push(this.tipos[index].id)
        }
      }
      this.eventos = this.listaCompletaDeEventos.filter(item => {
        for (let index = 0; index < this.selectedValues.length; index++) {
          const element = this.selectedValues[index];
          if (item.tipo == element) {
            return true;
          };
        }
        return false;
      });
    }
  }

  selectTypes() {
    for (let index = 0; index < this.tipos.length; index++) {
      this.tipos[index].cheked = this.all;
    }
  }

  showFilter() {
    this.showFilters = !this.showFilters
  }

}

