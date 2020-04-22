import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventosPage } from './eventos-page';
import { EventoCardComponent } from '../../components/evento-card/evento-card.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: EventosPage }])
  ],
  entryComponents: [
    EventoCardComponent
  ],
  declarations: [EventosPage]
})
export class EventosPageModule {}
