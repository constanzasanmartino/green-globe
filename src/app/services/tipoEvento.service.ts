import { Injectable } from '@angular/core';
import { ITipoEventoLista } from '../models/tipoEvento.interface'
//import { HttpClient } from '@angular/common/http'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TipoEventoService {

  private eventosCollection: AngularFirestoreCollection<ITipoEventoLista>;
  private eventos: Observable<ITipoEventoLista[]>;

  constructor(db: AngularFirestore) {

    this.eventosCollection = db.collection<ITipoEventoLista>('tipoDeEvento');
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
  getTiposEvento() {
    return this.eventos;
  }
}