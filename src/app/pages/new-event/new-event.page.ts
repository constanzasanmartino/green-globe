import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { AlertController } from '@ionic/angular';

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
  imagenesButtonText = 'AGREGAR IMÁGENES'

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  yourImage: any;

  imagenes: any[] = []

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
      let photo = reader.result.toString();
      let rnd = (Math.random() * (9999999999)).toString();
      let img = 'pictures/eventos' + rnd;
      const pictures = storage().ref(img);
      pictures.putString(photo.toString(), 'data_url').then(a => {

        let url = pictures.getDownloadURL().then( a => {
          this.photo = a
        });
      });
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
        let rnd = (Math.random() * (9999999999)).toString();
        let img = 'pictures/eventos' + rnd;
        const pictures = storage().ref(img);
        pictures.putString(photo.toString(), 'data_url').then( resp => {
          let url = pictures.getDownloadURL().then( a => {
            this.imagenes.push(
              {
                urlImagen: a
              })
          });

        });
      }
      reader.readAsDataURL(file);
    }
  }


  onCreateEvent() {
    this.loading = true;
    this.evento.creadoPorRobot = false;
    if (this.photo) {
      this.evento.foto = this.photo.toString()
    }

    if (this.evento.linkContacto) {
      if(!this.evento.linkContacto.includes('https://www.')) {
        if (this.evento.linkContacto.includes('www.')) {
          this.evento.linkContacto = 'https://' + this.evento.linkContacto
        } else {
          this.evento.linkContacto = 'https://www.' + this.evento.linkContacto
        }
      }
    }


    if (this.evento.tipo) {
        if (this.validarFechas(this.evento.fechaFin, this.evento.fechaInicio)) {

          this.eventoService.agregarEvento(this.evento).then(response => {
            if (response.id) {
              if (this.imagenes.length > 0) {
                this.eventoService.agregarFotos(this.imagenes, response.id)
              }
              this.loading = false;
              this.mostrarAlerta('Evento creado con exito!!!', 'Juntos podemos salvar el planeta!')
              this.volver()
    
            } else {
              this.loading = false;
              this.mostrarAlerta('Error al guardar el evento!', 'Intente nuevamente')
            }
          })
        }
      } else {
        this.loading = false;
        this.mostrarAlerta('Debe ingresar tipo!', 'Intente nuevamente')
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
      this.loading = false;
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

  onDeleteClick(ind) {
    this.imagenes.splice(ind, 1)
    if (this.imagenes.length == 0) {
      this.hayImagenes = false;
      this.imagenesButtonText = 'AGREGAR IMÁGENES'
    }
  }

  onDeletePortadaClick() {
    this.evento.foto = '';
    this.hayFotoPortada = false;
    this.photo = '';
    this.portadaButtonText = 'SELECCIONAR PORTADA';
  }


}
