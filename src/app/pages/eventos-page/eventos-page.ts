import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  cantidadDeTiposDeEventosSeleccionados:number=0;
  all:boolean=false;
  none:boolean=false;
  loading: boolean = true;
  showFilters: boolean = false;
  esEnProgreso:boolean=true;

  constructor(private eventoService: EventoService, private router: Router) {

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
      this.esEnProgreso=false;
    }
    if (event == 'enProgreso') {
      this.eventosEnProgreso = this.listaCompletaDeEventos.filter(e => new Date(e.fechaInicio) > new Date)
      this.eventos = this.eventosEnProgreso
      this.esEnProgreso=true;
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
  filtrar() {
      this.selectedValues = [];
      for (let index = 0; index < this.tipos.length; index++) {
        if (this.tipos[index].cheked) {
          this.selectedValues.push(this.tipos[index].id);
        }
      }
      if (this.esEnProgreso){
        this.eventos = this.eventosEnProgreso.filter(item => {
          for (let index = 0; index < this.selectedValues.length; index++) {
            const element = this.selectedValues[index];
            if (item.tipo == element) {
              return true;
            };
          }
          return false;
        });
     }
     else{
      this.eventos = this.eventosFinalizados.filter(item => {
        for (let index = 0; index < this.selectedValues.length; index++) {
          const element = this.selectedValues[index];
          if (item.tipo == element) {
            return true;
          };
        }
        return false;
      });

     }
      
     this.showFilters = !this.showFilters; 
  }

  selectAllTypes(){
  if(this.all){ 
    for (let index = 0; index < this.tipos.length; index++) {
      this.tipos[index].cheked = this.all;
    }
      this.none=false;
   }
   else{
     if (this.cantidadDeTiposDeEventosSeleccionados==this.tipos.length){
      for (let index = 0; index < this.tipos.length; index++) {
        this.tipos[index].cheked = this.all;
      }
     }
   }
 }
  selectNoneTypes(){
  if(this.none){

    for (let index = 0; index < this.tipos.length; index++) {
      this.tipos[index].cheked = false;
    }
   this.cantidadDeTiposDeEventosSeleccionados=0;
   this.all=false;
  }
}
  
 selectAnType (type:ITipoEvento){
    if (type.cheked){
      this.cantidadDeTiposDeEventosSeleccionados+=1;
      this.none=false;
    }
    else{
      this.cantidadDeTiposDeEventosSeleccionados-=1;
      this.all=false;
    }
   }

  showFilter() {
    this.showFilters = !this.showFilters
  }

  newEvent() {
  this.router.navigate(['/nuevo-evento']);
  } 

}

