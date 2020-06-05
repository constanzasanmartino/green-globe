import { Component, OnInit, Input } from '@angular/core';

import { IComentarioEvento } from '../../models/evento.interface';

@Component({
  selector: 'app-comentario-card',
  templateUrl: './comentario-card.component.html',
  styleUrls: ['./comentario-card.component.scss'],
})
export class ComentarioCardComponent implements OnInit {

  @Input() comentarioEvento: IComentarioEvento;

  constructor() { }

  ngOnInit() {
  }

}
