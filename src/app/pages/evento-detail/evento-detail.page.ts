import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvento } from '../../models/evento.interface';
import { ITipoEvento } from '../../models/tipo-evento.interface';
import { IImagenEvento } from '../../models/imagenes-evento.interface';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'app-event',
  templateUrl: './evento-detail.page.html',
  styleUrls: ['./evento-detail.page.scss'],
})
export class EventoDetailPage implements OnInit {

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

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  evento: IEvento;
  imagnesEvento: IImagenEvento[] = [];

  instagram: boolean = false;
  facebook: boolean = false;

  constructor(private route: Router, private eventoService: EventoService) {
    let evento = this.route.getCurrentNavigation().extras.state;
    this.evento = {
      id: evento.id,
      nombre: evento.nombre,
      descripcion: evento.descripcion,
      descripcionCorta: evento.descripcionCorta,
      fechaInicio: evento.fechaInicio,
      fechaFin: evento.fechaFin,
      ubicacion: evento.ubicacion,
      foto: evento.foto,
      tipo: evento.tipo,
      linkContacto: evento.linkContacto,
      mailContacto: evento.mailContacto,
      nombreContacto: evento.nombreContacto,
      celularContacto: evento.celularContacto
    }

    if (evento.linkContacto) {
      if (evento.linkContacto.includes('instagram')) this.instagram = true;
      if (evento.linkContacto.includes('facebook')) this.facebook = true;
    }

    this.imagnesEvento = [
      {
        id: 0,
        urlImagen:'../assets/default.jpg'
      }
    ]

    this.eventoService.getImagenes(evento.id).subscribe(response => {
      if ( response.length > 0 ) {
        this.imagnesEvento = response;
      }
    });
  }

  ngOnInit() { }
}
