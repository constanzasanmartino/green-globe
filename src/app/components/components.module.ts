import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoCardComponent } from './evento-card/evento-card.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [
   EventoCardComponent
  ],
  declarations: [
    EventoCardComponent
  ],
  exports: [
    EventoCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentsModule { }
