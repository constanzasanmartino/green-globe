import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor( private http: HttpClient ) { }

  getEventos() {
    return this.http.get('../assets/eventos.json')
  }
}
