import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { AlertController, Platform } from '@ionic/angular';

import { storage } from 'firebase';

import { EventoService } from '../../services/evento.service';
import { ITipoEvento } from '../../models/tipo-evento.interface';
import { IEvento } from '../../models/evento.interface';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
})
export class NewEventPage implements OnInit {

  evento: IEvento = {
    nombre: '',
    fechaFin: '',
    fechaInicio: '',
    descripcion: '',
    descripcionCorta: '',
    tipo: null,
    ubicacion: ''
  }

  tiposEvento: ITipoEvento[] = [];
  public selectedValues: number[] = [];

  hayFotoPortada: boolean = false;
  portadaButtonText = 'SELECCIONAR PORTADA'

  hayImagenes: boolean = false;
  imagenesButtonText = 'SELECCIONAR IMÁGENES'

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  yourImage: any;

  imagenes: any[] = []

  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  @ViewChild('filePickerMultiple', { static: false }) fileMultiplePickerRef: ElementRef<HTMLInputElement>;
  photo: SafeResourceUrl;
  isDesktop: boolean;

  constructor(private eventoService: EventoService, private alertCtrl: AlertController,
    private router: Router) {

    this.eventoService.getTiposEvento().subscribe(response => {
      this.tiposEvento = response;
    })

  }

  ngOnInit() { }

  getPicture() {
    this.portadaButtonText = 'CAMBIAR PORTADA';
    this.filePickerRef.nativeElement.click();
  }

  onFileChoose(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      console.log('File format not supported');
      return;
    }

    reader.onload = () => {
      this.hayFotoPortada = true;
      this.photo = reader.result.toString();
      let rnd = (Math.random() * (9999999999)).toString();
      let img = 'pictures/eventos' + rnd;
      const pictures = storage().ref(img);
      pictures.putString(this.photo.toString(), 'data_url');
    };
    reader.readAsDataURL(file);

  }

  
  onSelectImagenes() {
    this.imagenesButtonText = 'AGREGAR IMÁGEN'
    this.fileMultiplePickerRef.nativeElement.click();
  }


  onFileChooseMultiple(event: Event) {
    console.log((event.target as HTMLInputElement).files)
    const file = (event.target as HTMLInputElement).files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      console.log('File format not supported');
      return;
    }

    console.log(this.imagenes)
    reader.onload = () => {
      this.hayImagenes = true;
      let photo = reader.result.toString();
      this.imagenes.push(photo)
      console.log(this.imagenes)
      // let rnd = (Math.random() * (9999999999)).toString();
      // let img = 'pictures/eventos' + rnd;
      // const pictures = storage().ref(img);
      // pictures.putString(this.photo.toString(), 'data_url');
      // console.log(this.photo.toString())
    };
    reader.readAsDataURL(file);

  }


  onCreateEvent() {
    console.log(this.evento)
    this.evento.foto = this.photo.toString()
    if( this.validarFechas(this.evento.fechaFin, this.evento.fechaInicio )) {

      this.eventoService.agregarEvento(this.evento).then(response => {
        if (response.id) {
          console.log('evento ' + response.id + ' creado')
          this.mostrarAlerta('Evento creado con exito!!!', 'Juntos podemos salvar el planeta!')
          this.volver()
  
        } else {
          this.mostrarAlerta('Error al guardar el evento!', 'Intente nuevamente')
        }
      })
    }
  }

  async mostrarAlerta(header: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: mensaje,
      buttons: [
        {
          text: 'Ok',
          handler: (blah) => { }
        }
      ]
    });
    await alert.present();
  }

  validarFechas(endDate, startDate) {
    let inicio = new Date(startDate);
    let fin = new Date(endDate);
    if (fin < inicio) {
      this.mostrarAlerta('Fechas Invalidas!', 'Intente nuevamente');
      return false;
    } else {
      return true;
    }
  }


  volver() {
    this.router.navigate(['/tabs/eventos']);
    this.evento = {
      nombre: '',
      fechaFin: '',
      fechaInicio: '',
      descripcion: '',
      descripcionCorta: '',
      tipo: null,
      ubicacion: '',
      foto: '',
      linkContacto: '',
      nombreContacto: '',
      mailContacto: '',
      celularContacto: null
    }
    this.portadaButtonText = 'SELECCIONAR PORTADA';
    this.hayFotoPortada = false;

    this.hayImagenes = false;
    this.imagenesButtonText = 'SELECCIONAR IMÁGENES'
  }


}
