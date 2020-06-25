import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IEvento } from '../../models/evento.interface';
import { ITipoEvento } from '../../models/tipo-evento.interface';

@Component({
  selector: 'app-evento-card',
  templateUrl: './evento-card.component.html',
  styleUrls: ['./evento-card.component.scss'],
})
export class EventoCardComponent implements OnInit {

  tipos: ITipoEvento[] = [
    {
      id: 1,
      descripcion: 'Recoleccion de basura',
      color: 'warning',
      icono: 'trash' 
    },
    {
      id: 2,
      descripcion: 'Reduccion de recursos',
      color: 'danger',
      icono: 'flashlight' 
    },
    {
      id: 3,
      descripcion: 'Reforestacion',
      color: 'success',
      icono: 'pulse' 
    },
    {
      id: 4,
      descripcion: 'Running',
      color: 'primary',
      icono: 'walk' 
    },
    {
      id: 5,
      descripcion: 'Reciclaje',
      color: 'tertiary',
      icono: 'sync' 
    }];

  @Input() evento: IEvento;
  imagenEvento: string = '../assets/default.jpg'

  constructor( private router: Router ) {}

  ngOnInit() {
    if(this.evento.foto) {
      this.imagenEvento = this.evento.foto;
    } else {
      this.evento.foto = this.imagenEvento
    }
  }

  goToEvent() {
    let eid = this.evento.id;
    this.router.navigate([`/evento/${eid}`], { state: this.evento } ).then();
  }

}
