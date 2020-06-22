import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventosPage } from './eventos-page';
import { EventoCardComponent } from '../../components/evento-card/evento-card.component';
import { ComponentsModule } from '../../components/components.module';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import {environment} from '../../../environments/environment';
@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CommonModule,
    ComponentsModule,

    RouterModule.forChild([{ path: '', component: EventosPage }])
  ],
  entryComponents: [
    EventoCardComponent
  ],
  declarations: [EventosPage]
})
export class EventosPageModule {}
