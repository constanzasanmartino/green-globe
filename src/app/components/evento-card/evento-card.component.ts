import { Component, OnInit, Input } from '@angular/core';
import { IEventoLista } from '../../models/evento-card.interface';

@Component({
  selector: 'app-evento-card',
  templateUrl: './evento-card.component.html',
  styleUrls: ['./evento-card.component.scss'],
})
export class EventoCardComponent implements OnInit {

  @Input() evento: IEventoLista;
tipos:String[]=['Recoleccion de basura','Reduccion de recursos','Reforestacion','Running','Reciclaje'];
  constructor() { }

  ngOnInit() {
  }

}
