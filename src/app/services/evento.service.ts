import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'

import { IEvento, IComentarioEvento } from '../models/evento.interface';
import { ITipoEvento } from '../models/tipo-evento.interface';
import { IImagenEvento } from '../models/imagenes-evento.interface';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  private tipoEventosCollection: AngularFirestoreCollection<ITipoEvento>;
  private eventosCollection: AngularFirestoreCollection<IEvento>;
  private imagenEventosCollection: AngularFirestoreCollection<IImagenEvento>;
  private tipoEventos: Observable<ITipoEvento[]>;
  private eventos: Observable<IEvento[]>;
  private imagenEventos: Observable<IImagenEvento[]>;
  private comentariosEventoCollection: AngularFirestoreCollection<IComentarioEvento>;
  private comentariosEvento: Observable<IComentarioEvento[]>

  constructor(private db: AngularFirestore) { }

  getEventos() {
    this.eventosCollection = this.db.collection<IEvento>('eventos', ref => ref.orderBy('fechaInicio', 'asc'));
    this.eventos = this.eventosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.eventos;
  }

  getTiposEvento() {
    this.tipoEventosCollection = this.db.collection<ITipoEvento>('tipoDeEvento');
    this.tipoEventos = this.tipoEventosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    return this.tipoEventos;
  }

  getImagenes(id: string) {
    this.imagenEventosCollection = this.db.collection<IImagenEvento>('eventos/' + id + '/imagenes');
    this.imagenEventos = this.db.collection<IImagenEvento>('eventos/' + id + '/imagenes').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    return this.imagenEventos;
  }

  getComentarios(id: string) {
    this.comentariosEventoCollection = this.db.collection<IComentarioEvento>('eventos/' + id + '/comentarios',  ref => ref.orderBy('fecha', 'desc'));
    this.comentariosEvento = this.db.collection<IComentarioEvento>('eventos/' + id + '/comentarios').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    return this.comentariosEvento;

  }
}