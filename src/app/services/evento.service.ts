import { Injectable } from '@angular/core';
import { IEventoLista } from '../models/evento-card.interface'
//import { HttpClient } from '@angular/common/http'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private eventosCollection: AngularFirestoreCollection<IEventoLista>;
  private eventos: Observable<IEventoLista[]>;

  constructor(db: AngularFirestore) {

    this.eventosCollection = db.collection<IEventoLista>('eventos');
    this.eventos = this.eventosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }

  getEventos() {
    return this.eventos;
  }
}