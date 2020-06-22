import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EventoCardComponent } from './evento-card/evento-card.component';
import { ComentarioCardComponent } from './comentario-card/comentario-card.component';

@NgModule({
  entryComponents: [
   EventoCardComponent,
   ComentarioCardComponent
  ],
  declarations: [
    EventoCardComponent,
    ComentarioCardComponent
  ],
  exports: [
    EventoCardComponent,
    ComentarioCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentsModule { }
