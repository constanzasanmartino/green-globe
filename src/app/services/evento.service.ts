import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'

import { IEvento } from '../models/evento.interface'
import { ITipoEvento } from '../models/tipo-evento.interface';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  private tipoEventosCollection: AngularFirestoreCollection<ITipoEvento>;
  private eventosCollection: AngularFirestoreCollection<IEvento>;
  private tipoEventos: Observable<ITipoEvento[]>;
  private eventos: Observable<IEvento[]>;
  private imagenesEvento: any[];
  constructor( private db: AngularFirestore ) { }

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
  getImagenes(id:String) {
     this.db.collection('eventos/'+id +'/imagenes').snapshotChanges().subscribe((imagenes) => {
      this.imagenesEvento = [];
      imagenes.forEach((imagen: any) => {
        this.imagenesEvento.push({
          id: imagen.payload.doc.id,
          data: imagen.payload.doc.data()
        });
      })
    });

    return this.imagenesEvento;
  }
}