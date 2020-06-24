import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { AlertController } from '@ionic/angular';

import { storage } from 'firebase';

import { EventoService } from '../../services/evento.service';
import { ITipoEvento } from '../../models/tipo-evento.interface';
import { IEvento } from '../../models/evento.interface';
import { IImagenEvento } from '../../models/imagenes-evento.interface';

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

  imagenes: IImagenEvento[] = []

  loading: boolean = false;

  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  @ViewChild('filePickerMultiple', { static: false }) fileMultiplePickerRef: ElementRef<HTMLInputElement>;
  photo: SafeResourceUrl;

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
      console.log(reader.result.toString())
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
    let files = (event.target as HTMLInputElement).files;

    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      let reader = new FileReader();
      reader.onload = () => {
        this.hayImagenes = true;
        let photo = reader.result.toString();
        this.imagenes.push(
          {
            id: i,
            urlImagen: photo
          })
      }
      reader.readAsDataURL(file);
    }
  }


  onCreateEvent() {
    this.loading = true;
    console.log(this.evento)
    if (this.evento.foto) {
      this.evento.foto = this.photo.toString()
    }
    if (this.validarFechas(this.evento.fechaFin, this.evento.fechaInicio)) {

      this.eventoService.agregarEvento(this.evento).then(response => {
        if (response.id) {
          // this.eventoService.agregarFotos(this.imagenes, response.id)
          console.log('evento ' + response.id + ' creado')
          this.loading = false;
          this.mostrarAlerta('Evento creado con exito!!!', 'Juntos podemos salvar el planeta!')
          this.volver()

        } else {
          this.loading = false;
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
